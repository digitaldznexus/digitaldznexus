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

export function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [contactMethods, setContactMethods] = useState<string[]>([]);

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

  const onSubmit = (data: ContactForm) => {
    submitContactMutation.mutate({
      ...data,
      contactMethods
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleContactMethod = (method: string) => {
    setContactMethods(prev => 
      prev.includes(method) 
        ? prev.filter(m => m !== method)
        : [...prev, method]
    );
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-2 ${
                  currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>1</div>
                <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
                  {t('contact.form.step1')}
                </span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4">
                <div 
                  className="h-1 bg-blue-600 transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-2 ${
                  currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>2</div>
                <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
                  {t('contact.form.step2')}
                </span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-2 ${
                  currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>3</div>
                <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>
                  {t('contact.form.step3')}
                </span>
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-6">Vos coordonnées</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>{t('contact.form.firstName')} *</Label>
                      <Input {...register('firstName')} />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label>{t('contact.form.lastName')} *</Label>
                      <Input {...register('lastName')} />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label>{t('contact.form.email')} *</Label>
                    <Input type="email" {...register('email')} />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>{t('contact.form.phone')} *</Label>
                    <Input type="tel" {...register('phone')} />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>{t('contact.form.company')}</Label>
                    <Input {...register('company')} />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Needs */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-montserrat font-bold text-xl text-dark-gray mb-6">Vos besoins</h3>
                  
                  <div>
                    <Label>Type de projet *</Label>
                    <Select onValueChange={(value) => setValue('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre projet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="site-vitrine">Site vitrine</SelectItem>
                        <SelectItem value="e-commerce">Site e-commerce</SelectItem>
                        <SelectItem value="application">Application web</SelectItem>
                        <SelectItem value="branding">Branding / Identité visuelle</SelectItem>
                        <SelectItem value="formation">Formation WhatsApp Business</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label>Budget prévu</Label>
                    <Select onValueChange={(value) => setValue('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30-50k">30k - 50k DZ</SelectItem>
                        <SelectItem value="50-100k">50k - 100k DZ</SelectItem>
                        <SelectItem value="100-200k">100k - 200k DZ</SelectItem>
                        <SelectItem value="200k+">200k+ DZ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Délai souhaité</Label>
                    <Select onValueChange={(value) => setValue('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le délai" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (1-2 semaines)</SelectItem>
                        <SelectItem value="normal">Normal (3-4 semaines)</SelectItem>
                        <SelectItem value="flexible">Flexible (1-2 mois)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Description du projet</Label>
                    <Textarea 
                      {...register('description')}
                      placeholder="Décrivez-nous votre projet en quelques mots..."
                      rows={4}
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Preferences */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-montserrat font-bold text-xl text-dark-gray mb-6">Moyens de contact préférés</h3>
                  
                  <div className="space-y-4">
                    {['Email', 'Téléphone', 'WhatsApp', 'Rencontre en personne'].map((method) => (
                      <label key={method} className="flex items-center cursor-pointer">
                        <Checkbox 
                          checked={contactMethods.includes(method)}
                          onCheckedChange={() => toggleContactMethod(method)}
                          className="mr-3"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                  
                  <div>
                    <Label>Créneaux de disponibilité</Label>
                    <Select onValueChange={(value) => setValue('availability', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez vos créneaux" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matin">Matin (8h-12h)</SelectItem>
                        <SelectItem value="apres-midi">Après-midi (14h-18h)</SelectItem>
                        <SelectItem value="soir">Soir (18h-20h)</SelectItem>
                        <SelectItem value="weekend">Weekend</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="bg-accent-green/10 rounded-lg p-4">
                    <h4 className="font-semibold text-dark-gray mb-2">Nos engagements :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Réponse sous 24h</li>
                      <li>✓ Devis gratuit et détaillé</li>
                      <li>✓ Consultation gratuite</li>
                      <li>✓ Satisfait ou remboursé</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <i className="fas fa-arrow-left mr-2"></i>
                    {t('contact.form.previous')}
                  </Button>
                )}
                
                {currentStep < 3 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto">
                    {t('contact.form.next')}
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="ml-auto"
                    disabled={submitContactMutation.isPending}
                  >
                    {submitContactMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        {t('contact.form.submit')}
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-montserrat font-bold text-xl text-dark-gray mb-6">Contactez-nous directement</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-royal-blue/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-royal-blue"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-gray">Téléphone</p>
                    <a href="tel:0666475367" className="text-royal-blue hover:text-accent-green transition-colors">
                      0666 47 53 67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fab fa-whatsapp text-accent-green"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-gray">WhatsApp Business</p>
                    <a href="https://wa.me/213666475367" className="text-accent-green hover:text-royal-blue transition-colors">
                      0666 47 53 67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-royal-blue/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-royal-blue"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-gray">Email</p>
                    <a href="mailto:digitaldznexus@gmail.com" className="text-royal-blue hover:text-accent-green transition-colors">
                      digitaldznexus@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-accent-green"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-gray">Localisation</p>
                    <p className="text-medium-gray">Avenue Khemisti, Mostaganem</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-montserrat font-bold text-xl text-dark-gray mb-4">Notre bureau</h3>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                alt="Digital Nexus office in Mostaganem" 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-medium-gray">Venez nous rendre visite pour discuter de votre projet autour d'un café.</p>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-royal-blue to-accent-green rounded-2xl p-6 text-white">
              <h3 className="font-montserrat font-bold text-xl mb-4">Réponse rapide garantie</h3>
              <div className="flex items-center mb-4">
                <i className="fas fa-clock text-2xl mr-4"></i>
                <div>
                  <p className="font-semibold">Sous 24h</p>
                  <p className="text-sm opacity-90">Nous vous répondons rapidement</p>
                </div>
              </div>
              <p className="text-sm opacity-90">Du lundi au vendredi, 9h-18h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
