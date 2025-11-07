import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} AlfiDev. All rights reserved.</p>
        <div className="flex items-center gap-4 text-gray-700">
          <a href="mailto:hello@alfidev.dev" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Mail size={18} /> Contact
          </a>
          <a href="https://github.com/cloudkuimages" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gray-900">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
