import myPhoto from '../../assets/ahmedehab.png';
const Hero = () => {
  return (
    <section className="bg-[#0b0f1a] text-white min-h-[80vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase">
            Full Stack Software Engineer
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            AHMED <br /> EHAB FAROUK
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
            <span className="text-white font-semibold">Software Engineer</span> and Open Source Development Trainee at
            <span className="text-blue-500"> ITI Smart Village (Intake 46)</span>.
            Leveraging a rigorous background in <span className="text-white">Communications & Electronics Engineering</span>,
            I architect high-availability backend systems and seamless full-stack experiences that prioritize
            performance and clean, maintainable code.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-sm font-bold transition-all">
              VIEW WORK
            </a>
            <a href="https://www.linkedin.com/in/ahmedehabx/" target='_blank' className="border border-slate-700 hover:border-slate-500 px-8 py-3 rounded-sm font-bold transition-all">
              CONTACT
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-20 animate-pulse"></div>

          <img
            src={myPhoto}
            alt="Ahmed Ehab Farouk"
            className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full object-cover  hover:grayscale-0 transition-all duration-500 border-4 border-slate-800 mx-auto shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;