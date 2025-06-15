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
  contactMethods: z.string().min(1, 'Veuillez sélectionner une méthode de contact'),
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const handleProjectTypeSelect = (type: ProjectType) => {
    setFormData(prev => ({ ...prev, projectType: type }));
    setStep(2);
  };

  const handleBudgetSelect = (budget: Budget) => {
    setFormData(prev => ({ ...prev, budget }));
    setStep(3);
  };

  const onSubmit = async (data: ContactForm) => {
    console.log('SUBMIT DATA', data);
    setSubmitStatus('idle');
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    if (data.company) formData.append('company', data.company);
    formData.append('projectType', data.projectType);
    if (data.budget) formData.append('budget', data.budget);
    if (data.timeline) formData.append('timeline', data.timeline);
    if (data.description) formData.append('description', data.description);
    if (data.contactMethods) formData.append('contactMethods', data.contactMethods);
    if (data.availability) formData.append('availability', data.availability);
    // Champ anti-spam
    formData.append('_gotcha', '');
  
    try {
      const response = await fetch('https://formspree.io/f/xgvyyvee', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        toast({
          title: t('common.success'),
          description: t('contact.form.success') || 'Votre demande a bien été envoyée !',
        });
        setStep(1);
        reset();
        setSubmitStatus('success');
      } else {
        toast({
          title: t('common.error'),
          description: t('contact.form.error') || "Une erreur s'est produite. Veuillez réessayer.",
        });
        setSubmitStatus('error');
      }
    } catch (error) {
      toast({
        title: t('common.error'),
        description: t('contact.form.error') || "Une erreur s'est produite. Veuillez réessayer.",
      });
      setSubmitStatus('error');
    }
  };
  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: t('contact.info.address.title'),
      details: t('contact.info.address.details'),
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: "fas fa-phone",
      title: t('contact.info.phone.title'),
      details: t('contact.info.phone.details'),
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: "fas fa-envelope",
      title: t('contact.info.email.title'),
      details: t('contact.info.email.details'),
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Bulles colorées floues en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            let content;
            if (info.icon === "fas fa-phone") {
              content = (
                <a href={`tel:${info.details.replace(/\s+/g, '')}`} className="text-orange-400 hover:underline">{info.details}</a>
              );
            } else if (info.icon === "fas fa-envelope") {
              content = (
                <a href={`mailto:${info.details}`} className="text-orange-400 hover:underline">{info.details}</a>
              );
            } else if (info.icon === "fas fa-map-marker-alt") {
              content = (
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.details)}`} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">{info.details}</a>
              );
            } else {
              content = info.details;
            }
            return (
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
                <p className="font-inter text-white/60">{content}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Champ caché anti-spam */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />    {/* Stepper */}
            {/* Message de succès ou d'échec */}
            {submitStatus === 'success' && (
              <div className="mb-4 text-green-400 font-semibold text-center">
                {t('contact.form.success') || 'Votre demande a bien été envoyée !'}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 text-red-400 font-semibold text-center">
                {t('contact.form.error') || "Une erreur s'est produite. Veuillez réessayer."}
              </div>
            )}
            <div className="flex justify-center mb-8 gap-4">
              {[1,2,3].map((s) => (
                <div key={s} className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg border-2 transition-all duration-300
                  ${step === s ? 'bg-orange-500 border-orange-500 text-white scale-110 shadow-lg' : 'bg-white/10 border-white/20 text-white/60'}`}>{s}</div>
              ))}
            </div>
            {/* Step 1: Coordonnées */}
            {step === 1 && (
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="font-inter text-white mb-3 block">{t('contact.form.firstName')}</label>
                  <input type="text" id="firstName" {...register("firstName", { required: true })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder={t('contact.form.firstNamePlaceholder')} />
                  {errors.firstName && <span className="text-orange-400 text-sm mt-2 block">{t('contact.form.errors.firstName')}</span>}
                </div>
                <div>
                  <label htmlFor="lastName" className="font-inter text-white mb-3 block">{t('contact.form.lastName')}</label>
                  <input type="text" id="lastName" {...register("lastName", { required: true })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder={t('contact.form.lastNamePlaceholder')} />
                  {errors.lastName && <span className="text-orange-400 text-sm mt-2 block">{t('contact.form.errors.lastName')}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="font-inter text-white mb-3 block">{t('contact.form.email')}</label>
                  <input type="email" id="email" {...register("email", { required: true })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder={t('contact.form.emailPlaceholder')} />
                  {errors.email && <span className="text-orange-400 text-sm mt-2 block">{t('contact.form.errors.email')}</span>}
                </div>
                <div>
                  <label htmlFor="phone" className="font-inter text-white mb-3 block">{t('contact.form.phone')}</label>
                  <input type="tel" id="phone" {...register("phone", { required: true })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder={t('contact.form.phonePlaceholder')} />
                  {errors.phone && <span className="text-orange-400 text-sm mt-2 block">{t('contact.form.errors.phone')}</span>}
                </div>
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button type="button" onClick={() => setStep(2)} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all">Suivant <i className="fas fa-arrow-right ml-2"></i></button>
                </div>
              </motion.div>
            )}
            {/* Step 2: Projet */}
            {step === 2 && (
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="projectType" className="font-inter text-white mb-3 block">{t('contact.form.projectType')}</label>
                  <select id="projectType" {...register("projectType", { required: true })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all">
                    <option value="">{t('contact.form.selectProjectType')}</option>
                    <option value="website">{t('contact.form.projectTypes.website')}</option>
                    <option value="ecommerce">{t('contact.form.projectTypes.ecommerce')}</option>
                    <option value="webapp">{t('contact.form.projectTypes.webapp')}</option>
                    <option value="other">{t('contact.form.projectTypes.other')}</option>
                  </select>
                  {errors.projectType && <span className="text-orange-400 text-sm mt-2 block">{t('contact.form.errors.projectType')}</span>}
                </div>
                <div>
                  <label htmlFor="budget" className="font-inter text-white mb-3 block">{t('contact.form.budget')}</label>
                  <select id="budget" {...register("budget")} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all">
                    <option value="">{t('contact.form.selectBudget')}</option>
                    <option value="small">{t('contact.form.budgets.small')}</option>
                    <option value="medium">{t('contact.form.budgets.medium')}</option>
                    <option value="large">{t('contact.form.budgets.large')}</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="description" className="font-inter text-white mb-3 block">{t('contact.form.description')}</label>
                  <textarea id="description" {...register("description")} rows={5} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none" placeholder={t('contact.form.descriptionPlaceholder')}></textarea>
                </div>
                <div className="md:col-span-2 flex justify-between mt-4">
                  <button type="button" onClick={() => setStep(1)} className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all"><i className="fas fa-arrow-left mr-2"></i> Précédent</button>
                  <button type="button" onClick={() => setStep(3)} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all">Suivant <i className="fas fa-arrow-right ml-2"></i></button>
                </div>
              </motion.div>
            )}
            {/* Step 3: Préférences & Confirmation */}
            {step === 3 && (
              <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-inter text-white mb-3 block">{t('contact.form.contactPreference')}</label>
                    <select
                      {...register("contactMethods", { required: true })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none"
                      style={{ minHeight: '48px', colorScheme: 'dark' }}
                    >
                      <option value="">{t('contact.form.selectContactMethods')}</option>
                      <option value="email">{t('contact.form.contactMethods.email')}</option>
                      <option value="phone">{t('contact.form.contactMethods.phone')}</option>
                      <option value="whatsapp">{t('contact.form.contactMethods.whatsapp')}</option>
                    </select>
                    {errors.contactMethods && (
                      <span className="text-orange-400 text-sm mt-2 block">
                        {t('contact.form.errors.contactMethods') || errors.contactMethods.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="availability" className="font-inter text-white mb-3 block">{t('contact.form.availability')}</label>
                    <input type="text" id="availability" {...register("availability")} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all" placeholder={t('contact.form.availabilityPlaceholder')} />
                  </div>
                </div>
                {/* Récapitulatif */}
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-white/80">
                  <h4 className="font-playfair text-xl mb-4 text-white">{t('contact.form.summary')}</h4>
                  <ul className="space-y-2">
                    <li><b>{t('contact.form.firstName')}:</b> {watch('firstName')} {watch('lastName')}</li>
                    <li><b>{t('contact.form.email')}:</b> {watch('email')}</li>
                    <li><b>{t('contact.form.phone')}:</b> {watch('phone')}</li>
                    <li><b>{t('contact.form.projectType')}:</b> {watch('projectType')}</li>
                    <li><b>{t('contact.form.budget')}:</b> {watch('budget')}</li>
                    <li><b>{t('contact.form.description')}:</b> {watch('description')}</li>
                    <li><b>{t('contact.form.contactPreference')}:</b> {watch('contactMethods') ? t(`contact.form.contactMethods.${watch('contactMethods')}`) : ''}</li>
                    <li><b>{t('contact.form.availability')}:</b> {watch('availability')}</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-4">
                  <button type="button" onClick={() => setStep(2)} className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all"><i className="fas fa-arrow-left mr-2"></i> {t('contact.form.previous')}</button>
                  <button type="submit" className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
                    {t('contact.form.submit')}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
