# Hosted Outlook signatures — October 25, 2026

Add public/signatures/james-beeker.html, sandra-martindale.html and an installation index. Preserve the approved compact side-by-side layout, 4px logo/text cell spacing, contact details, LinkedIn destination and quoted italic core principle. Add noindex/nofollow metadata to the signature pages.

The preview deployment is protected by Vercel sign-in. To avoid making recipient image loading depend on that session, the HTML references the approved PNG via an immutable public GitHub HTTPS URL:

https://raw.githubusercontent.com/jamesbeeker007-cell/hivegrid-energy-os/7deb56175ce263e1b33a87f510274a783eac38a1/public/images/hivegrid-signature-hexagon.png

This is an independent public image URL and is usable before production publication. Signature pages are available under /signatures/ in the development preview, and will become available on the main website after an authorized release. Do not describe the main-domain signature paths as live before that release.

Validation: both HTML pages rendered in Chromium using the exact PNG bytes; HTTPS image references, 4px cell spacing and quoted italic principle checked; desktop screenshots visually inspected. No installed Outlook send/receive verification is claimed. Recipient email applications may still block external pictures according to their preferences.

Install on desktop by opening the individual signature page, selecting all and copying the rendered signature, then pasting it into Outlook's signature editor. Test received mail, replies, forwards, links and image loading before routine use. Production remains untouched and requires explicit release approval.
