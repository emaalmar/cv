export default function About() {
  const qualities = [
    { icon: '⚡', title: 'Aprendizaje Rápido', desc: 'Adaptación constante a nuevas tecnologías' },
    { icon: '🧑‍💼', title: 'Liderazgo Personal', desc: 'Proactividad y responsabilidad en proyectos' },
    { icon: '🎯', title: 'Atención al Detalle', desc: 'Enfoque en calidad y precisión' },
    { icon: '🤝', title: 'Confiable', desc: 'Compromiso con plazos y entregables' },
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Sobre Mí
        </h2>

        {/* Párrafos */}
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
          <p>
            Soy desarrollador de software enfocado en crear soluciones eficientes y escalables. 
            Mi enfoque combina código limpio con documentación clara, validando ideas a través 
            de proyectos reales que demuestran mis capacidades técnicas y organizacionales.
          </p>

          <p>
            Aplico principios Agile/Scrum en mi trabajo, priorizando la comunicación clara y 
            la documentación detallada. Me caracterizo por mi liderazgo personal, aprendizaje 
            rápido, atención al detalle y confiabilidad en cada proyecto que emprendo.
          </p>
        </div>

        {/* Cualidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((quality, index) => (
            <div
              key={index}
              className="bg-black/50 border border-gray-800 rounded-lg p-6 text-center hover:border-blue-500 transition"
            >
              <div className="text-4xl mb-3">{quality.icon}</div>
              <h3 className="text-white font-semibold mb-2">{quality.title}</h3>
              <p className="text-gray-400 text-sm">{quality.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}