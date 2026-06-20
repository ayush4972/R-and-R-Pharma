# R.G. Suppliers Pvt. Ltd. (Rising Group Pvt. Ltd.)

Full-stack website for a pharmaceutical / medical-equipment distribution company based in
Sitapaila, Kathmandu, Nepal. The frontend is a React (Vite) single-page app built from the
original Google Stitch design; the backend is an Express API that delivers contact-form
submissions by email.

```
project-root/
├── frontend/          React + Vite SPA (React Router)
│   ├── public/images/ Company + partner logos
│   └── src/
│       ├── components/  Header, Footer, Layout, ProductCard, PartnerCard
│       ├── pages/       Home, About, Products, Partners, Contact
│       └── data/        products.json, partners.json
├── backend/           Express + Resend API
│   ├── routes/contact.js
│   └── server.js
└── stitch_assets/     Original Stitch export (design reference only)
```

## Tech stack

- **Frontend:** React 18, React Router 6, Vite, Tailwind (via CDN with the original Stitch design tokens)
- **Backend:** Node.js, Express, Resend (email delivery), CORS

---

## Running locally

You need [Node.js](https://nodejs.org/) 18+ installed. Use two terminals.

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env      # then edit .env with real credentials (see below)
npm run dev               # starts on http://localhost:5001
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev               # starts on http://localhost:5173
```

The Vite dev server proxies `/api/*` to `http://localhost:5001`, so the contact form works
end-to-end with no extra configuration.

---

## Configuring email (`.env`)

The contact form sends an email to **gyanshankerdeo@gmail.com** using
[Resend](https://resend.com). Copy `backend/.env.example` to `backend/.env` and fill in:

| Variable         | Description                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------- |
| `PORT`           | Port the API listens on (default `5001`)                                                      |
| `CLIENT_ORIGIN`  | Allowed CORS origin (your frontend URL; `*` for local dev)                                    |
| `RESEND_API_KEY` | Your Resend API key                                                                           |
| `EMAIL_TO`       | Recipient of submissions (defaults to `gyanshankerdeo@gmail.com`)                             |
| `EMAIL_FROM`     | Sender address — must be on a Resend-verified domain (defaults to `onboarding@resend.dev`)    |

### Resend setup

1. **Sign up** at [resend.com](https://resend.com). The free tier allows **3,000 emails/month
   (100/day)** — plenty for a contact form.
2. In the Resend dashboard, open **API Keys → Create API Key** and copy the key.
3. Paste it into `backend/.env` as `RESEND_API_KEY=...`.
4. That's enough to start: emails will send from Resend's shared test sender
   `onboarding@resend.dev`. (With the test sender, Resend only delivers to the email address
   you signed up with — verify a domain to send anywhere.)

**(Optional, for production) Verify your own domain:** In the Resend dashboard go to
**Domains → Add Domain**, add the DNS records they provide, and once it's verified set
`EMAIL_FROM` to an address on that domain (e.g. `R.G. Suppliers <noreply@yourdomain.com>`).
Emails will then send from your own address instead of the default test sender.

`.env` is git-ignored — never commit your API key.

---

## Deployment

### Frontend → Vercel or Netlify

Build settings:

- **Root directory:** `frontend`
- **Build command:** `npm run build`
- **Output directory:** `dist`

SPA routing is already handled: `frontend/vercel.json` rewrites all routes to `index.html`
(Vercel) and `frontend/public/_redirects` does the same for Netlify. After deploying the
backend, set the frontend to call it — either point the dev proxy target / a `fetch` base URL
at the backend URL, or host both behind the same domain.

### Backend → Render or Railway

- **Root directory:** `backend`
- **Build command:** `npm install`
- **Start command:** `npm start`
- Add the environment variables from the table above in the service dashboard.
- Set `CLIENT_ORIGIN` to your deployed frontend URL so CORS allows it.

After the backend is live, update the frontend so its `/api/contact` request reaches the
backend (e.g. set `CLIENT_ORIGIN` on the backend and configure the frontend's API base URL /
proxy to the backend's public URL).

---

## API

### `POST /api/contact`

Request body (JSON):

```json
{
  "name": "Dr. Sameer Thapa",
  "email": "buyer@hospital.com.np",
  "message": "We'd like a quote for surgical sutures."
}
```

- Validates that `name`, `email` and `message` are present and that `email` is well-formed.
- Sends the submission via Resend to `EMAIL_TO`.
- On success returns `200 { "success": true, "message": "...", "id": "<resend-id>" }`.
- On validation failure returns `400`. Resend/configuration errors return `500`/`502`, each with
  a descriptive `message` — the server logs the detail and never crashes.
