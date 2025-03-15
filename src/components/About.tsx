const About: React.FC = () => {
    return (
      <section id="about" className="h-dvh">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center p-9">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-8"></div>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Hello! I'm <span className="font-semibold text-sky-400">[Your Name]</span>, 
                a passionate <span className="font-semibold">[Your Profession]</span> with 
                <span className="font-semibold"> [Your Experience]</span> of experience in 
                <span className="font-semibold"> [Your Field]</span>. I have a strong interest in 
                <span className="font-semibold"> [Your Main Interest]</span> and I'm always looking for new 
                challenges and opportunities to grow professionally.
              </p>
  
              <p className="text-lg leading-relaxed text-gray-700">
                My approach combines creative thinking with technical expertise to deliver solutions that not only 
                meet requirements but exceed expectations. I believe in continuous learning and staying updated 
                with the latest industry trends and technologies.
              </p>
            </div>
  
            <div className="lg:col-span-1">
              <div className="pt-4">
                <h4 className="text-xl font-semibold text-sky-400 mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-sky-900 text-sky-100 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
  
              <div className="pt-6">
                <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  