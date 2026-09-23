# Personal Todo

The project is split into two areas:

- `frontend/public/`: the existing todo app (HTML, CSS, JavaScript). Its current
  features and browser-based `localStorage` behavior are preserved.
- `backend/`: an Express server scaffold with a health endpoint.

## Start the backend

```sh
cd backend
npm install
npm run dev
```

Then open `http://localhost:3000/api/health`. The existing frontend can be opened
from `frontend/public/index.html`; it still stores data in the current browser.

## Next steps

1. Migrate the frontend to React + Vite while preserving its current features.
2. Add a database and todo create/read/update/delete API to the backend.
3. Connect the frontend to that API, then deploy both parts.
