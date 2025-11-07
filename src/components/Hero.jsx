export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              Hello, I’m AlfiDev
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Building simple, fast products for the web.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              I craft tools and platforms that make sharing, collaboration, and cloud experiences effortless.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center px-4 py-2 rounded-md bg-black text-white">
                Explore Projects
              </a>
              <a href="https://github.com/cloudkuimages" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md ring-1 ring-gray-300 text-gray-800">
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
