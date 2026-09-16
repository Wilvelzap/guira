const FIRST_TOUCH_KEY = 'guira_first_touch';
const LAST_TOUCH_KEY = 'guira_last_touch';

const ATTRIBUTION_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_id',
    'utm_term',
    'utm_content',
    'adset_id',
    'ad_id',
    'placement',
    'site_source',
    'fbclid',
];

function createTouchpoint() {
    const pageUrl = new URL(window.location.href);
    const touchpoint = {};

    ATTRIBUTION_KEYS.forEach((key) => {
        touchpoint[key] = pageUrl.searchParams.get(key);
    });

    return {
        ...touchpoint,
        landing_path: window.location.pathname,
        referrer: document.referrer || null,
        attribution_timestamp: new Date().toISOString(),
    };
}

function readTouchpoint(key) {
    try {
        const storedValue = window.sessionStorage.getItem(key);
        if (!storedValue) return null;

        const parsedValue = JSON.parse(storedValue);
        return parsedValue && typeof parsedValue === 'object' ? parsedValue : null;
    } catch {
        return null;
    }
}

function storeTouchpoint(key, touchpoint) {
    try {
        window.sessionStorage.setItem(key, JSON.stringify(touchpoint));
    } catch {
        // El seguimiento del clic sigue funcionando si sessionStorage no está disponible.
    }
}

function initializeAttribution() {
    const currentTouchpoint = createTouchpoint();
    const storedFirstTouch = readTouchpoint(FIRST_TOUCH_KEY);
    const firstTouch = storedFirstTouch || currentTouchpoint;

    if (!storedFirstTouch) {
        storeTouchpoint(FIRST_TOUCH_KEY, firstTouch);
    }

    const pageUrl = new URL(window.location.href);
    const hasAdvertisingParameters = ATTRIBUTION_KEYS.some((key) =>
        pageUrl.searchParams.has(key)
    );

    if (hasAdvertisingParameters) {
        storeTouchpoint(LAST_TOUCH_KEY, currentTouchpoint);
    }

    return firstTouch;
}

function getWhatsappDetails(href) {
    const whatsappUrl = new URL(href, window.location.href);
    const message = whatsappUrl.searchParams.get('text');
    const codeMatch = message?.match(/^\[(W-(PAG|COB)\d+)\]\s/);

    if (!codeMatch) {
        return {
            whatsapp_code: null,
            whatsapp_intent: 'general',
            has_prefilled_message: message !== null,
        };
    }

    return {
        whatsapp_code: codeMatch[1],
        whatsapp_intent:
            codeMatch[2] === 'PAG' ? 'pagos_proveedores' : 'cobros_recepcion',
        has_prefilled_message: true,
    };
}

function isWhatsappLink(link) {
    try {
        return new URL(link.getAttribute('href') || '', window.location.href).hostname === 'wa.me';
    } catch {
        return false;
    }
}

if (!window.__GUIRA_WHATSAPP_TRACKING__) {
    window.__GUIRA_WHATSAPP_TRACKING__ = true;

    const firstTouch = initializeAttribution();

    document.addEventListener('click', (event) => {
        const link = event.target?.closest?.('a');
        if (!link || !isWhatsappLink(link)) return;

        const href = link.getAttribute('href') || '';
        const whatsappDetails = getWhatsappDetails(href);
        const eventProperties = {
            ...whatsappDetails,
            cta_location: link.dataset.ctaLocation,
            page_path: window.location.pathname,
            utm_source: firstTouch.utm_source,
            utm_medium: firstTouch.utm_medium,
            utm_campaign: firstTouch.utm_campaign,
            utm_id: firstTouch.utm_id,
            utm_term: firstTouch.utm_term,
            utm_content: firstTouch.utm_content,
            adset_id: firstTouch.adset_id,
            ad_id: firstTouch.ad_id,
            placement: firstTouch.placement,
            site_source: firstTouch.site_source,
            fbclid: firstTouch.fbclid,
            landing_path: firstTouch.landing_path,
            referrer: firstTouch.referrer,
        };

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'click-whatsapp',
            ...eventProperties,
        });

        window.posthog?.capture(
            'whatsapp_contact_clicked',
            eventProperties
        );
    });
}
