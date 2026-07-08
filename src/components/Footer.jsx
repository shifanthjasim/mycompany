function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="SoftCloud Lanka logo" className="h-8 w-auto" />
          <p>© 2026 SoftCloud Lanka — Site created by SoftCloud Lanka.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#home" className="transition hover:text-cyan-700">Home</a>
          <a href="#about" className="transition hover:text-cyan-700">About</a>
          <a href="#services" className="transition hover:text-cyan-700">Services</a>
          <a href="#contact" className="transition hover:text-cyan-700">Contact</a>
          <button type="button" onClick={() => onNavigate("privacy")} className="transition hover:text-cyan-700">Privacy Policy</button>
          <button type="button" onClick={() => onNavigate("terms")} className="transition hover:text-cyan-700">Terms & Conditions</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;