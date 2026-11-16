import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-start justify-center gap-6 p-6 sm:p-12">
      <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">404</p>
      <h1 className="max-w-[14em] font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-balance">
        Esta página não existe.
      </h1>
      <p className="text-ink/70">This page does not exist.</p>
      <Link
        href="/"
        className="rounded-full bg-ink px-6 py-3 font-mono text-xs tracking-[0.16em] text-paper uppercase transition-opacity hover:opacity-80"
      >
        ← Início / Home
      </Link>
    </main>
  );
}
