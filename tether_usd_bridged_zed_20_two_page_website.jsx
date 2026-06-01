export default function TetherUSDBridgedZED20Site() {
  const navigateTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">ZED20</h1>
            <p className="text-sm text-slate-400">Tether USD Bridged</p>
          </div>

          <nav className="flex gap-4">
            <button
              onClick={() => navigateTo('home')}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              Accueil
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition"
            >
              Projet
            </button>
          </nav>
        </div>
      </header>

      {/* PAGE 1 */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6">
            Stablecoin Nouvelle Génération
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Tether USD Bridged <span className="text-emerald-400">ZED20</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Tether USD Bridged ZED20 est un stablecoin bridge conçu pour des
            transactions rapides, sécurisées et efficaces à travers les
            écosystèmes décentralisés.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigateTo('about')}
              className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition shadow-lg"
            >
              Découvrir le Projet
            </button>

            <button className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-emerald-400 transition">
              Whitepaper
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500 blur-3xl opacity-20 rounded-full"></div>

          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-emerald-400">Fast</h3>
                <p className="text-slate-400 mt-2">
                  Transactions ultra rapides.
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-emerald-400">Secure</h3>
                <p className="text-slate-400 mt-2">
                  Infrastructure blockchain sécurisée.
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-emerald-400">Bridge</h3>
                <p className="text-slate-400 mt-2">
                  Compatible multi-chaînes.
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold text-emerald-400">Stable</h3>
                <p className="text-slate-400 mt-2">
                  Indexé sur le dollar américain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 2 */}
      <section
        id="about"
        className="border-t border-slate-800 bg-slate-900/40"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              À propos du projet <span className="text-emerald-400">ZED20</span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
              Le projet Tether USD Bridged ZED20 vise à faciliter les échanges
              numériques avec un stablecoin moderne capable de fonctionner dans
              plusieurs environnements blockchain tout en offrant rapidité,
              stabilité et sécurité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-400 transition">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Sécurité
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Une architecture fiable pour protéger les transactions et les
                actifs numériques.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-400 transition">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Rapidité
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Des transferts optimisés afin d'assurer une expérience fluide
                sur les réseaux décentralisés.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-emerald-400 transition">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Interopérabilité
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Compatibilité entre différents écosystèmes blockchain grâce à
                la technologie bridge.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-3xl p-12 text-black text-center shadow-2xl">
            <h3 className="text-4xl font-extrabold mb-4">
              Rejoignez l'écosystème ZED20
            </h3>

            <p className="max-w-2xl mx-auto text-lg mb-8">
              Construisons ensemble une solution stable et innovante pour les
              paiements numériques et la finance décentralisée.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition">
                Commencer
              </button>

              <button className="px-6 py-3 rounded-2xl border border-black font-semibold hover:bg-black hover:text-white transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        <p>
          © 2026 Tether USD Bridged ZED20 — Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
