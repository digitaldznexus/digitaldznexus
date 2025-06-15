import React, { useState } from 'react';

interface PackContactModalProps {
  open: boolean;
  onClose: () => void;
  packName: string;
}

export const PackContactModal: React.FC<PackContactModalProps> = ({ open, onClose, packName }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    const formData = new FormData();
    formData.append('pack', packName);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('_gotcha', '');
    try {
      const res = await fetch('https://formspree.io/f/xgvyyvee', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => {
          setForm({ name: '', email: '', message: '' });
          onClose();
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white/80 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-6 sm:p-8 max-w-md w-[90vw] text-center relative transition-all duration-300">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-xl font-bold">×</button>
        <h3 className="text-xl font-bold mb-2 text-purple-700">Demander ce pack</h3>
        <p className="mb-4 text-sm text-gray-700">Pack choisi : <span className="font-semibold text-orange-500">{packName}</span></p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Votre email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Votre message (optionnel)"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none resize-none"
            rows={3}
          />
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <button
            type="submit"
            className="w-full py-2 rounded-full font-semibold bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow hover:from-orange-500 hover:to-orange-600 transition-all"
            disabled={loading}
          >
            {loading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
        {status === 'success' && <div className="mt-4 text-green-600 font-semibold">Message envoyé !</div>}
        {status === 'error' && <div className="mt-4 text-red-500 font-semibold">Erreur lors de l'envoi. Réessayez.</div>}
      </div>
    </div>
  );
}; 