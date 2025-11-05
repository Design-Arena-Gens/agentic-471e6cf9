export default function Home() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100svh', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 640 }}>
        <h1 style={{ fontSize: 48, marginBottom: 12 }}>Hi ??</h1>
        <p style={{ opacity: 0.85, lineHeight: 1.8 }}>
          Your Next.js app is live. Explore the API at <code>/api/hello</code>.
        </p>
        <a href="/api/hello" style={{ display: 'inline-block', marginTop: 16, padding: '10px 16px', borderRadius: 8, background: '#1f6feb', color: 'white', textDecoration: 'none' }}>Call API</a>
      </div>
    </main>
  );
}
