export const metadata = {
  title: 'Agentic App',
  description: 'Deployed on Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', background: '#0b1220', color: '#e6edf3' }}>
        {children}
      </body>
    </html>
  );
}
