export default function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-2 text-gray-600">Who I am and what I focus on</p>
          </div>
          <div className="md:col-span-2">
            <div className="prose prose-gray max-w-none">
              <p>
                I’m AlfiDev — I enjoy building lean products that feel fast and get out of your way.
                My interests sit at the intersection of developer tools, media, and cloud-first experiences.
              </p>
              <p>
                Lately I’ve been focused on:
              </p>
              <ul>
                <li>Lightweight sharing tools that reduce friction</li>
                <li>Edge-first performance and smart caching</li>
                <li>Minimal, clear UI with semantic typography</li>
              </ul>
              <p>
                Outside of work, I explore new tech stacks, refine product ideas, and occasionally write about the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
