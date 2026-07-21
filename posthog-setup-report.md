# PostHog post-wizard report

The wizard integrated PostHog into the Astro static site using a reusable initialization component included by the shared layout. The configuration reads the public project token and ingestion host from Astro `PUBLIC_` environment variables, preserves default autocapture and session recording behavior, and adds targeted conversion, lead-quality, engagement, and failure events without sending form-entered PII in event properties. Network exceptions from the lead forms are also forwarded to PostHog error tracking. The production build completed successfully.

| Event | Description | File |
|---|---|---|
| `demo_form_submitted` | A visitor successfully submits the demo request form. | `src/components/DemoForm.astro` |
| `demo_form_failed` | A demo request submission fails due to an API or connection error. | `src/components/DemoForm.astro` |
| `contact_form_submitted` | A visitor successfully submits the corporate contact form. | `src/pages/contacto.astro` |
| `contact_form_failed` | A corporate contact form submission fails due to an API or connection error. | `src/pages/contacto.astro` |
| `platform_link_clicked` | A visitor clicks a link to enter or register on the Guira platform. | `src/layouts/Layout.astro` |
| `whatsapp_contact_clicked` | A visitor clicks a WhatsApp contact link from the marketing site. | `src/layouts/Layout.astro` |
| `demo_cta_clicked` | A visitor clicks a call to action leading to the demo flow. | `src/layouts/Layout.astro` |
| `blog_article_completed` | A visitor reaches at least 90% of a blog article for the first time. | `src/pages/blog/[slug].astro` |

## Next steps

We've built insights and a dashboard to monitor the newly instrumented behavior:

- [Analytics basics dashboard (wizard)](https://us.posthog.com/project/522785/dashboard/1884923)
- [Visitor to demo request funnel (wizard)](https://us.posthog.com/project/522785/insights/HQDrVzgO)
- [Lead submissions by use case (wizard)](https://us.posthog.com/project/522785/insights/68L6YQ5H)
- [Form failures (wizard)](https://us.posthog.com/project/522785/insights/cnqrz8Bz)
- [High-intent outbound clicks (wizard)](https://us.posthog.com/project/522785/insights/JDXBtVTJ)
- [Blog article completions (wizard)](https://us.posthog.com/project/522785/insights/LpK1OioT)

## Verify before merging

- [ ] Run a full production build and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or the bundler upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in the project. This context can support further agent development in Claude Code and keep future PostHog changes aligned with current Astro integration guidance.
