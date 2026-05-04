// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-5xl mx-auto mb-6 shadow-lg">
            👨‍💻
          </div>

          {/* Identity */}
          <h1 className="text-5xl font-bold mb-2">Muhammad Rafi Rajendra</h1>
          <p className="text-blue-400 text-xl mb-1 font-mono">NIM: 2341720158</p>
          <p className="text-slate-400 text-lg mb-8">
            Informatics Engineering · State Polytechnic of Malang · 2023
          </p>

          {/* Tech Interests */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">
              Tech Interests
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "⚛️ React / Next.js",
                "🐍 Python",
                "🗄️ PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-700 rounded-full text-sm font-medium border border-slate-600 hover:border-blue-400 transition"
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
              className="px-6 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-blue-100 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}