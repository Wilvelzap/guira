const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const trackingSource = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'scripts', 'whatsapp-tracking.js'),
    'utf8'
);

function createSessionStorage() {
    const values = new Map();

    return {
        getItem(key) {
            return values.has(key) ? values.get(key) : null;
        },
        setItem(key, value) {
            values.set(key, String(value));
        },
    };
}

function bootPage({ href, referrer = '', sessionStorage = createSessionStorage() }) {
    const clickHandlers = [];
    const captures = [];
    const pageUrl = new URL(href);
    const window = {
        location: {
            href: pageUrl.href,
            pathname: pageUrl.pathname,
        },
        sessionStorage,
        posthog: {
            capture(eventName, properties) {
                captures.push({ eventName, properties });
            },
        },
    };
    const document = {
        referrer,
        addEventListener(eventName, handler) {
            if (eventName === 'click') clickHandlers.push(handler);
        },
    };
    const context = vm.createContext({ URL, Date, window, document });

    function initialize() {
        vm.runInContext(`(() => {${trackingSource}\n})()`, context);
    }

    initialize();

    return {
        captures,
        clickHandlers,
        initialize,
        sessionStorage,
        window,
        click(link) {
            clickHandlers.forEach((handler) =>
                handler({ target: { closest: () => link } })
            );
        },
    };
}

function createLink(href, ctaLocation) {
    return {
        dataset: { ctaLocation },
        getAttribute(name) {
            return name === 'href' ? href : null;
        },
    };
}

test('captures a W-PAG click once with the original first-touch attribution', () => {
    const href = 'https://www.guiracorp.com/pagar-proveedores-exterior/?utm_source=meta&utm_medium=paid_social&utm_campaign=septiembre&utm_id=cmp-1&utm_term=importadores&utm_content=video-a&adset_id=set-2&ad_id=ad-3&placement=feed&site_source=facebook&fbclid=fb-4';
    const page = bootPage({
        href,
        referrer: 'https://www.facebook.com/',
    });
    const whatsappHref = 'https://wa.me/59167015106?text=%5BW-PAG1%5D%20Hola,%20quiero%20pagar%20a%20mis%20proveedores%20del%20exterior%20con%20Guira';
    const link = createLink(whatsappHref, 'hero');

    page.click(link);

    assert.equal(page.window.dataLayer.length, 1);
    assert.equal(page.captures.length, 1);
    assert.equal(page.window.dataLayer[0].event, 'click-whatsapp');
    assert.equal(page.captures[0].eventName, 'whatsapp_contact_clicked');
    assert.deepEqual(
        JSON.parse(JSON.stringify(page.captures[0].properties)),
        {
            whatsapp_code: 'W-PAG1',
            whatsapp_intent: 'pagos_proveedores',
            has_prefilled_message: true,
            cta_location: 'hero',
            page_path: '/pagar-proveedores-exterior/',
            utm_source: 'meta',
            utm_medium: 'paid_social',
            utm_campaign: 'septiembre',
            utm_id: 'cmp-1',
            utm_term: 'importadores',
            utm_content: 'video-a',
            adset_id: 'set-2',
            ad_id: 'ad-3',
            placement: 'feed',
            site_source: 'facebook',
            fbclid: 'fb-4',
            landing_path: '/pagar-proveedores-exterior/',
            referrer: 'https://www.facebook.com/',
        }
    );
    assert.equal(link.getAttribute('href'), whatsappHref);
    assert.ok(page.sessionStorage.getItem('guira_first_touch'));
    assert.ok(page.sessionStorage.getItem('guira_last_touch'));
});

test('distinguishes two buttons that share a W-COB code', () => {
    const page = bootPage({ href: 'https://www.guiracorp.com/cobrar-clientes-exterior/' });
    const whatsappHref = 'https://wa.me/59167015106?text=%5BW-COB5%5D%20Hola%2C%20quiero%20cobrar%20a%20mis%20clientes%20del%20exterior%20con%20Guira.';

    page.click(createLink(whatsappHref, 'hero'));
    page.click(createLink(whatsappHref, 'how_it_works'));

    assert.equal(page.window.dataLayer.length, 2);
    assert.equal(page.captures.length, 2);
    assert.equal(page.window.dataLayer[0].whatsapp_code, 'W-COB5');
    assert.equal(page.window.dataLayer[0].whatsapp_intent, 'cobros_recepcion');
    assert.equal(page.window.dataLayer[0].cta_location, 'hero');
    assert.equal(page.window.dataLayer[1].cta_location, 'how_it_works');
});

test('classifies the footer link without text as general and unprefilled', () => {
    const page = bootPage({ href: 'https://www.guiracorp.com/' });

    page.click(createLink('https://wa.me/59167015106', 'footer'));

    assert.equal(page.window.dataLayer[0].whatsapp_code, null);
    assert.equal(page.window.dataLayer[0].whatsapp_intent, 'general');
    assert.equal(page.window.dataLayer[0].has_prefilled_message, false);
    assert.equal(page.window.dataLayer[0].cta_location, 'footer');
});

test('keeps first touch after internal navigation and updates no internal UTM', () => {
    const sessionStorage = createSessionStorage();
    bootPage({
        href: 'https://www.guiracorp.com/?utm_source=google&utm_medium=cpc&utm_campaign=brand&fbclid=first-click',
        referrer: 'https://www.google.com/',
        sessionStorage,
    });
    const secondPage = bootPage({
        href: 'https://www.guiracorp.com/pagos-cobros-internacionales/',
        referrer: 'https://www.guiracorp.com/',
        sessionStorage,
    });

    secondPage.click(
        createLink(
            'https://wa.me/59167015106?text=%5BW-COB1%5D%20Hola,%20quiero%20recibir%20pagos%20internacionales%20en%20mi%20empresa%20con%20Guira',
            'final_cta'
        )
    );

    const event = secondPage.window.dataLayer[0];
    assert.equal(event.utm_source, 'google');
    assert.equal(event.utm_medium, 'cpc');
    assert.equal(event.utm_campaign, 'brand');
    assert.equal(event.fbclid, 'first-click');
    assert.equal(event.landing_path, '/');
    assert.equal(event.referrer, 'https://www.google.com/');
});

test('stores direct first touch without creating last touch', () => {
    const page = bootPage({ href: 'https://www.guiracorp.com/contacto/' });

    page.click(createLink('https://wa.me/59167015106', 'footer'));

    const event = page.window.dataLayer[0];
    assert.equal(event.utm_source, null);
    assert.equal(event.fbclid, null);
    assert.equal(event.landing_path, '/contacto/');
    assert.equal(page.sessionStorage.getItem('guira_last_touch'), null);
});

test('treats a prefilled share link without a Guira code as general', () => {
    const page = bootPage({ href: 'https://www.guiracorp.com/blog/articulo/' });

    page.click(
        createLink(
            'https://wa.me/?text=Articulo%20de%20Guira',
            'documentation'
        )
    );

    const event = page.window.dataLayer[0];
    assert.equal(event.whatsapp_code, null);
    assert.equal(event.whatsapp_intent, 'general');
    assert.equal(event.has_prefilled_message, true);
});

test('initialization guard prevents duplicate listeners and events', () => {
    const page = bootPage({ href: 'https://www.guiracorp.com/' });
    page.initialize();

    assert.equal(page.clickHandlers.length, 1);
    page.click(
        createLink(
            'https://wa.me/59167015106?text=%5BW-PAG1%5D%20Hola',
            'sticky_mobile'
        )
    );
    assert.equal(page.window.dataLayer.length, 1);
    assert.equal(page.captures.length, 1);
});

test('source contains no retired references, legacy event, or internal-link UTM', () => {
    const sourceRoot = path.join(__dirname, '..', 'src');
    const sourceFiles = [];

    function collectSourceFiles(directory) {
        fs.readdirSync(directory, { withFileTypes: true }).forEach((entry) => {
            const fullPath = path.join(directory, entry.name);
            if (entry.isDirectory()) collectSourceFiles(fullPath);
            else sourceFiles.push(fullPath);
        });
    }

    collectSourceFiles(sourceRoot);
    const source = sourceFiles
        .map((file) => fs.readFileSync(file, 'utf8'))
        .join('\n');

    assert.doesNotMatch(source, /\[ref:/i);
    assert.doesNotMatch(source, /\bwhatsapp_click\b/i);
    assert.doesNotMatch(source, /href\s*=\s*["'`{][^\r\n>]*utm_/i);
    assert.equal((source.match(/event:\s*['"]click-whatsapp['"]/g) || []).length, 1);
    assert.equal((source.match(/['"]whatsapp_contact_clicked['"]/g) || []).length, 1);
});
