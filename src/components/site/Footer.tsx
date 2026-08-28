export default function Footer() {
  return (
    <footer className="border-t border-brand-border/30 bg-brand-bg">
      <div className="container-shell py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
        <p>© {new Date().getFullYear()} ServisGitar. All rights reserved.</p>
        <p>Foundational shell — no articles/content yet.</p>
      </div>
    </footer>
  );
}
