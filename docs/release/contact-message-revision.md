# Contact form revision — October 25, 2026

Replace the project-specific prompt with a warmer invitation: “We’d love to hear from you. Have a question or a project in mind? Tell us a little about it below, or email us directly.”

Collect Name (optional), Email address (required) and How can we help? (required). Send the name, email and trimmed message in the FormSubmit payload. Use “Send message” on the button. Keep the direct-email fallback, accessible labels, live status/error announcements and existing approved branding.

Validation: production build passed; eleven browser regression groups passed, including assertions for name/email/message in the intercepted payload, required-message validation, optional name and preservation of message text on provider rejection. Automated axe checks again reported zero violations across the eight tested desktop/mobile page states. No live email was sent during automated testing.

Sandra previously verified preview activation and actual delivery for the email-only form. After this revision, a single preview test with a question should confirm the message content appears in the delivered email. The same activated endpoint/origin is retained.

This revision supersedes the earlier release candidate 14c31ca. Production remains unchanged. Final content acceptance and explicit publication authorization remain pending.
