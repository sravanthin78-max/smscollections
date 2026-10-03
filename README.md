# SMS Collections website
Production-ready Next.js 16 site for smscollections.com.

## Run locally
1. Install Node 20.9+.
2. `npm install`
3. `npm run dev`

## Edit content
Business copy and contact details live in `lib/content.ts`. Replace bracketed placeholders only with confirmed client facts.

## Deploy
Push this folder to GitHub, import the repository into Vercel, optionally set `NEXT_PUBLIC_SITE_URL` to the final domain, and deploy. No environment variable is required for the build.
