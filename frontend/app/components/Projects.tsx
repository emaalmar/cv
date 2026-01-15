export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portafolio + CV Interactivo',
      description: 'Aplicación full-stack para mostrar proyectos y habilidades. Demuestra capacidades de desarrollo y documentación profesional.',
      technologies: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS'],
      documentation: ['README profesional', 'Diagrama de arquitectura', 'Estructura documentada', 'Flujo de datos'],
      github: 'https://github.com/tu-usuario/portafolio',
      demo: 'https://tu-portafolio.vercel.app',
    },
    // Proyectos placeholder - reemplazar con tus proyectos reales
    {
      id: 2,
      title: 'Proyecto Personal 2',
      description: 'Descripción del segundo proyecto. Explica qué problema resuelve y por qué lo construiste.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      documentation: ['README', 'API docs', 'Guía de instalación'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Proyecto Personal 3',
      description: 'Descripción del tercer proyecto. Detalla las características principales y el valor que aporta.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      documentation: ['README', 'Arquitectura', 'Tests'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Proyectos
        </h2>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-blue-500 transition group"
            >
              {/* Header */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Documentación */}
                <div className="mb-4">
                  <p className="text-gray-500 text-xs font-semibold mb-2">Documentación:</p>
                  <ul className="space-y-1">
                    {project.documentation.map((doc, index) => (
                      <li key={index} className="text-gray-400 text-xs flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer - Enlaces */}
              <div className="px-6 py-4 bg-black/50 border-t border-gray-800 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-500 rounded transition text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition text-sm"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}