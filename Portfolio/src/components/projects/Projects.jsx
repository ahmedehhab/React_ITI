const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0f1a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold border-l-4 border-blue-600 pl-4 uppercase tracking-widest">
            Portfolio Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">Waraq Platform</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                A full-stack application built with the <span className="text-white">MEARN Stack</span>. 
                Features a scalable Node.js API and a responsive Angular frontend.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Angular</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Node.js</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Express</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">MongoDB</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/ahmedehhab/waraq-api" target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-500 hover:text-white transition-colors">BACKEND REPO</a>
              <a href="https://github.com/MEAN-GUYS/waraq-angular" target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-500 hover:text-white transition-colors">FRONTEND REPO</a>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">E-Commerce API</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Robust backend engine for online retail. Includes secure user authentication, 
                product management, and complex order processing logic.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Node.js</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Express</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">MongoDB</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">JWT</span>
              </div>
            </div>
            <a href="https://github.com/ahmedehhab/E-commerce" target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-500 hover:text-white transition-colors">VIEW SOURCE CODE →</a>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">Saraha Backend</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                An anonymous messaging system designed with a focus on data privacy, 
                secure message handling, and high-performance throughput.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Node.js</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Express</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">MongoDB</span>
                <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 uppercase">Encryption</span>
              </div>
            </div>
            <a href="https://github.com/ahmedehhab/saraha" target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-500 hover:text-white transition-colors">VIEW SOURCE CODE →</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;