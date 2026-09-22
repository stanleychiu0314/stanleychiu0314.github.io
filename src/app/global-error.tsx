"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <p>Something went wrong.</p>
        {error?.digest && <p>Reference: {error.digest}</p>}
      </body>
    </html>
  );
}
