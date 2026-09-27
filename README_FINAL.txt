MEGA YOUTH FAMILY GATHERING 2026 - CLOUDFLARE FINAL CLEAN

Repository structure:
worker.js
wrangler.jsonc
package.json
public/index.html
public/app.js
public/config.js
public/logo.svg

NO _redirects
NO _routes.json
NO Netlify files
NO extra Wrangler configuration

Cloudflare Workers Build settings:
Build command: None
Deploy command: npx wrangler deploy --config ./wrangler.jsonc
Root directory: /
Production branch: main

The Wrangler config intentionally uses:
assets.directory = ./public

Upload the CONTENTS of this package to the GitHub repository root, not the ZIP file itself.

Do not delete or rename the public folder.

The Supabase browser configuration is already in public/config.js using the publishable/anon key.

Optional database file:
INSTALL_OR_UPGRADE_RERUN_SAFE.sql
Use this only if the current Supabase database is missing or needs the final safe upgrade.
