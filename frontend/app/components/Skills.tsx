export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'NestJS', 'Python', 'Java', 'SQL', 'MongoDB', 'REST APIs'],
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Docker', 'Linux', 'npm', 'Postman', 'CI/CD'],
    },
    {
      category: 'Metodologías',
      icon: '📋',
      skills: ['Scrum', 'Agile', 'Documentación Técnica', 'Comunicación Clara', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Habilidades
        </h2>

        {/* Grid de Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition"
            >
              {/* Categoría */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-sm hover:border-blue-500 hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota */}
        <div className="mt-12 text-center text-gray-400 text-sm max-w-2xl mx-auto">
          <p>
            Estos conocimientos están validados a través de proyectos personales y estudios continuos. 
            Cada tecnología listada aparece en al menos un proyecto documentado.
          </p>
        </div>
      </div>
    </section>
  );
}