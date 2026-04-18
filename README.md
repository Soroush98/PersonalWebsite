# PersonalWebsite

My personal website. Production deployment at [www.sorooshes98.com](https://www.sorooshes98.com).

Built with [Next.js](https://nextjs.org) 16 (App Router) + TypeScript + Tailwind.

## Development

```bash
npm install
cp .env.example .env.local   # fill in EMAIL_USER / EMAIL_PASS (Gmail app password, no spaces)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Contact form

The `/api/message` route ([src/app/api/message/route.ts](src/app/api/message/route.ts))
sanitizes input and sends mail via Gmail SMTP through Nodemailer. Required env vars:

| Variable     | Purpose                                         |
| ------------ | ----------------------------------------------- |
| `EMAIL_USER` | Gmail address the message is sent from          |
| `EMAIL_PASS` | Gmail [app password](https://myaccount.google.com/apppasswords) (16 chars, no spaces) |
| `CONTACT_TO` | Destination inbox (defaults to `EMAIL_USER`)    |
