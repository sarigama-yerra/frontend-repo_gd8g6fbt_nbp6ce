import { Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight">AlfiDev</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="https://github.com/cloudkuimages" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Github size={18} />
            GitHub
          </a>
        </nav>
        <a
          href="#projects"
          className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-md bg-black text-white text-sm"
        >
          View Projects
        </a>
      </div>
    </header>
  );
}
