'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-black to-gray-900 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-50 h-50 rounded-full border-2 border-blue-500 overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Emanuel Ledesma Camacho"
              width={128}
              height={128}
              className="w-full h-full object-cover object-[50%_10%]"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Emanuel Ledesma
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-blue-500 mb-6">
          Software Developer | Technical Communicator
        </p>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Desarrollador aprendiendo a crear soluciones escalables con código limpio 
          y documentación excelente. Apasionado por el aprendizaje continuo y la 
          comunicación clara en equipos ágiles.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition"
          >
            Contactar
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}