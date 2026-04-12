export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} ApplyFlow. AI-powered job concierge with human assistants.</p>
        <p>Privacy · Terms · Contact</p>
      </div>
    </footer>
  );
}
