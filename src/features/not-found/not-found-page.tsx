import { VercelAnalitics } from "../vercel";

export default function NotFoundPage() {
  return (
    <main data-testid="page404">
      <VercelAnalitics />
      404
    </main>
  );
}
