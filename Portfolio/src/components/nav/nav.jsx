const Nav = () => {
    return (
        <nav className="bg-[#0b0f1a] text-slate-200 border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

                <div className="text-lg font-bold tracking-tighter uppercase">
                    Ahmed Ehab <span className="text-blue-500 font-light text-sm">Farouk</span> 
                </div>

                <div className="flex items-center gap-6 sm:gap-10 text-[11px] font-bold tracking-widest">
                    <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
                    <a href="#skills" className="hover:text-blue-400 transition-colors">SKILLS</a>

                    <a
                        href="https://drive.google.com/file/d/1AvjiueJL8bDeX-6qLDY5xYvBi6_fxMZX/view?usp=drive_link"
                        target="_blank"
                        className="border border-blue-500 text-blue-500 px-4 py-2 rounded-sm hover:bg-blue-500 hover:text-white transition-all"
                    >
                        CV
                    </a>
                </div>

            </div>
        </nav>
    );

}

export default Nav