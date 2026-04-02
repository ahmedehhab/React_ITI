const Education = () => {

  return (
    <section id="education" className="bg-[#0b0f1a] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-600 pl-4 uppercase tracking-widest">
          Education
        </h2>

        <div className="space-y-12">
          
          <div className="relative pl-8 border-l border-blue-600/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-blue-400 uppercase">
                  Open Source Development Scholar
                </h3>
                <p className="text-slate-200 font-medium">ITI - Smart Village Branch (Intake 46)</p>
              </div>
              <span className="text-sm font-mono text-slate-400 mt-2 md:mt-0">Oct 2025 - Present</span>
            </div>
            <p className="text-slate-400 leading-relaxed mt-4">
              Intensive professional training focusing on full-stack development and open-source technologies.
            </p>
          </div>

          <div className="relative pl-8 border-l border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-100 uppercase">
                  B.Sc. Communications & Electronics Engineering
                </h3>
                <p className="text-slate-300 font-medium">Mansoura Collage Academy</p>
              </div>
              <span className="text-sm font-mono text-slate-400 mt-2 md:mt-0">2020 - 2025</span>
            </div>
            <p className="text-slate-400 leading-relaxed mt-4">
              Graduated in January 2025. Specialized in electronics and communication systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;