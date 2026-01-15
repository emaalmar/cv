'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
        const response = await fetch( 'http://localhost:3001/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
        }
    } catch (error) {
        setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Contacto
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          ¿Interesado en colaborar o saber más? Envíame un mensaje y responderé pronto.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info de contacto */}
          <div className="space-y-4 text-gray-300">
            <h3 className="text-2xl font-semibold text-white">Detalles</h3>
            <p>Email: <a className="text-blue-400 hover:underline" href="mailto:emanuellescam@gmail.com">emanuellescam@gmail.com</a></p>
            <p>GitHub: <a className="text-blue-400 hover:underline" href="https://github.com/emaalmar" target="_blank" rel="noreferrer">https://github.com/emaalmar</a></p>
            <p>LinkedIn: <a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/emanuel-l-b68227334/" target="_blank" rel="noreferrer">linkedin.com/in/emanuel-l-b68227334/</a></p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="bg-black/50 border border-gray-800 rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">Nombre</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">Mensaje</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="Cuéntame sobre tu proyecto o vacante"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition disabled:opacity-60"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>

            {status === 'sent' && (
              <p className="text-green-400 text-sm">Mensaje enviado. Gracias por contactarme.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">Ocurrió un error. Intenta de nuevo.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}