import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <header>
        <h1>Page not found</h1>
        <p className="dates">
          <Link href="/">Read the Privacy Policy</Link>
        </p>
      </header>
    </main>
  );
}
