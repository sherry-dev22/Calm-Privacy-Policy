# Calmly Privacy Policy

A one-page Next.js site, exported as static HTML.

## Before publishing

Open `site.config.js` and check:

- `developer`: the legal name of the publisher.
- `contactEmail`: a public support address (or set `NEXT_PUBLIC_CONTACT_EMAIL`
  in Netlify). If empty, the page refers readers to the Google Play contact.
- the dates.

## Run locally

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # writes the site to ./out

## Publish on Netlify

**Drag and drop:** run `npm run build`, then drop the `out` folder on
https://app.netlify.com/drop

**From Git:** push this folder to a repository and import it in Netlify.
`netlify.toml` already sets the build command and publish folder.

Then paste the site address into Play Console under
App content → Privacy policy.

## Keep it accurate

Update the text if the app ever adds accounts, analytics, ads, crash reporting,
payments, internet access or new permissions.
