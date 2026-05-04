// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-3xl font-light mx-auto mb-6 tracking-widest text-neutral-300 overflow-hidden">
            <img src="/logo.png" alt="Profile Picture" className="w-full h-full object-cover" />
          </div>

          {/* Identity */}
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Muhammad Rafi Rajendra</h1>
          <p className="text-neutral-400 text-xl mb-1 font-mono tracking-wider">NIM: 2341720158</p>
          <p className="text-neutral-500 text-lg mb-8">
            Informatics Engineering · State Polytechnic of Malang · 2023
          </p>

          {/* Tech Interests */}
          <div className="mb-10">
            <h2 className="text-lg font-medium mb-4 text-neutral-400">
              Tech Interests
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "React / Next.js",
                "Python",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-neutral-900 rounded-full text-sm font-medium border border-neutral-800 hover:border-white transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/rafiirajendra"
              className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}