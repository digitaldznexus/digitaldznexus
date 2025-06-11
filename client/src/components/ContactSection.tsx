import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().optional(),
  contactMethods: z.array(z.string()).optional(),
  availability: z.string().optional()
});

type ContactForm = z.infer<typeof contactSchema>;

type FormStep = 1 | 2 | 3;
type ProjectType = 'website' | 'ecommerce' | 'webapp' | 'other';
type Budget = 'small' | 'medium' | 'large';

export function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    projectType: '' as ProjectType,
    budget: '' as Budget,
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contacts', {
        ...data,
        contactMethods
      });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Succès !",
        description: data.message,
      });
      // Reset form or redirect
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du formulaire.",
        variant: "destructive",
      });
    }
  });

  const handleProjectTypeSelect = (type: ProjectType) => {
    setFormData(prev => ({ ...prev, projectType: type }));
    setStep(2);
  };

  const handleBudgetSelect = (budget: Budget) => {
    setFormData(prev => ({ ...prev, budget }));
    setStep(3);
  };

  const onSubmit = (data: ContactForm) => {
    submitContactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Notre Adresse",
      details: "Avenue Khemisti, Mostaganem, Algérie",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: "fas fa-phone",
      title: "Téléphone",
      details: "+213 666 47 53 67",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: "contact@digitalnexus.dz",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Parlons de votre projet
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Prêt à transformer votre présence en ligne ? Contactez-nous pour discuter de votre projet.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${info.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="font-playfair text-xl text-white mb-4">{info.title}</h3>
              <p className="font-inter text-gray-400">{info.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="font-inter text-white mb-3 block">Nom complet</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                placeholder="Votre nom"
              />
              {errors.name && <span className="text-orange-400 text-sm mt-2 block">Ce champ est requis</span>}
            </div>

            <div>
              <label htmlFor="email" className="font-inter text-white mb-3 block">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                placeholder="votre@email.com"
              />
              {errors.email && <span className="text-orange-400 text-sm mt-2 block">Email invalide</span>}
            </div>

            <div>
              <label htmlFor="phone" className="font-inter text-white mb-3 block">Téléphone</label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                placeholder="+213 XXX XX XX XX"
              />
              {errors.phone && <span className="text-orange-400 text-sm mt-2 block">Ce champ est requis</span>}
            </div>

            <div>
              <label htmlFor="company" className="font-inter text-white mb-3 block">Entreprise (optionnel)</label>
              <input
                type="text"
                id="company"
                {...register("company")}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                placeholder="Nom de votre entreprise"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="projectType" className="font-inter text-white mb-3 block">Type de projet</label>
              <select
                id="projectType"
                {...register("projectType", { required: true })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              >
                <option value="">Sélectionnez un type de projet</option>
                <option value="website">Site Web</option>
                <option value="ecommerce">E-commerce</option>
                <option value="webapp">Application Web</option>
                <option value="other">Autre</option>
              </select>
              {errors.projectType && <span className="text-orange-400 text-sm mt-2 block">Veuillez sélectionner un type de projet</span>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="font-inter text-white mb-3 block">Description du projet</label>
              <textarea
                id="description"
                {...register("description")}
                rows={6}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                placeholder="Décrivez votre projet en quelques mots..."
              ></textarea>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-inter font-medium hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
