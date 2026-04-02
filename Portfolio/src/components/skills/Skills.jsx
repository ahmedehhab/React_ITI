const Skills = () => {
  return (
    <section id="skills" className="bg-[#0b0f1a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold border-l-4 border-blue-600 pl-4 uppercase tracking-widest">
            Technical Skills
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl">
            A comprehensive overview of my technical stack, spanning from robust backend architectures 
            to interactive frontend interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500 transition-colors">
            <h3 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-widest">Backend</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Node.js / Express.js</li>
              <li>NestJS / Next.js</li>
              <li>RESTful API Design</li>
              <li>JWT Authentication</li>
              <li>Redis Caching</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500 transition-colors">
            <h3 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-widest">Frontend</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>ReactJS / VueJS</li>
              <li>Angular</li>
              <li>TypeScript / JavaScript</li>
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500 transition-colors">
            <h3 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-widest">Databases</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>MongoDB / Mongoose</li>
              <li>MySQL / Sequelize</li>
              <li>Microsoft SQL Server</li>
              <li>Database Design</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500 transition-colors">
            <h3 className="text-blue-400 font-bold mb-4 uppercase text-sm tracking-widest">Tools & DevOps</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Git / GitHub</li>
              <li>Docker Fundamentals</li>
              <li>Vercel Deployment</li>
              <li>Cloudinary / Paymob</li>
              <li>Unit & Automated Testing</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 p-6 rounded-xl bg-blue-600/5 border border-blue-500/20">
          <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Engineering Mindset</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Finalist in <span className="text-white">ECPC 2022 & 2023</span>. 
            Solved <span className="text-white">800+ problems</span> across Codeforces and LeetCode. 
            Expertise in <span className="text-white">Data Structures, Algorithms</span>, and <span className="text-white">Object-Oriented Programming</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;