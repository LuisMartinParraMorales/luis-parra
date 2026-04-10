# Luis Parra Portfolio

Public portfolio site for Luis Parra, built with Next.js and deployed on Vercel.

The site presents selected work across ML systems, backend services, analytical products, and decision-support platforms, with project stories focused on what was built, why it was hard, and how the systems were delivered.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel

## Local Development

```bash
npm install
npm run dev
```

The development server starts on `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run test:ui
```

## Deployment

- `preview-dev` deploys to a Vercel Preview environment.
- `main` deploys to Vercel Production.
- GitHub Actions runs linting, typechecking, the production build, and UI smoke tests.
- Continuous deployment is handled by the Vercel Git integration.

Production site: [luis-parra.vercel.app](https://luis-parra.vercel.app)
