import { ExternalLink, Globe } from 'lucide-react';

const projects = [
  {
    name: 'Cloudku Images',
    url: 'https://cloudkuimages.guru',
    description: 'Image hosting and delivery platform optimized for speed and simplicity.',
  },
  {
    name: 'CodeShare',
    url: 'https://codeshare.cloudku.click',
    description: 'Minimal, fast code sharing with instant links.',
  },
  {
    name: 'Cloudku',
    url: 'https://cloudku.click',
    description: 'A suite of lightweight cloud tools for everyday use.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
            <p className="mt-2 text-gray-600">A selection of things I’ve built and shipped.</p>
          </div>
          <a href="https://github.com/cloudkuimages" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
            <Globe size={18} /> More on GitHub
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-black/5 bg-white p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {p.name}
                </h3>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-600" />
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
