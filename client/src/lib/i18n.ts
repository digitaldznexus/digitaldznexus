import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      nav: {
        home: "Accueil",
        services: "Services",
        portfolio: "Portfolio",
        testimonials: "Témoignages",
        pricing: "Tarifs",
        contact: "Contact",
        getQuote: "Devis Gratuit"
      },
      // Hero Section
      hero: {
        badge: "Digital Nexus - Votre Partenaire Digital",
        why: "POURQUOI",
        title: "80% des clients cherchent en ligne d'abord ?",
        subtitle: "Avec un site pro, même basique, vous :",
        benefits: {
          credibility: {
            title: "Doublez votre crédibilité",
            description: "Vraie adresse, photos pro, témoignages"
          },
          clients: {
            title: "Gagnez des clients 24h/24",
            description: "Même quand vous dormez !"
          },
          calls: {
            title: "Évitez les appels inutiles",
            description: "Tarifs et infos déjà en ligne"
          }
        },
        pricing: {
          from: "Le tout à partir de",
          only: "seulement"
        },
        cta: {
          discuss: "On en discute ?",
          services: "Voir nos services"
        },
        discoverServices: "Découvrir nos services",
        viewWork: "Voir nos réalisations",
        projectsCompleted: "Projets réalisés",
        clientsSatisfied: "Clients satisfaits",
        yearsExperience: "Années d'expérience"
      },
      // Services
      services: {
        title: "Nos Services d'Excellence",
        subtitle: "De la conception à la réalisation, nous vous accompagnons dans votre transformation digitale",
        websiteCreation: {
          title: "Création Sites Web",
          description: "Sites vitrines, e-commerce et applications web sur mesure. Design moderne et optimisé pour tous les appareils.",
          price: "À partir de 30k DZ"
        },
        whatsappTraining: {
          title: "Formation WhatsApp Business",
          description: "Maîtrisez WhatsApp Business pour développer votre clientèle et optimiser votre communication.",
          status: "En développement"
        },
        branding: {
          title: "Branding Digital",
          description: "Création d'identités visuelles fortes et cohérentes pour marquer les esprits et se démarquer.",
          status: "En développement"
        }
      },
      // Portfolio
      portfolio: {
        title: "Nos Réalisations",
        subtitle: "Découvrez quelques-uns de nos projets les plus marquants",
        filters: {
          all: "Tous les projets",
          website: "Sites Web",
          whatsapp: "WhatsApp Business",
          branding: "Branding"
        },
        categories: {
          website: "Site Web",
          whatsapp: "WhatsApp",
          branding: "Branding"
        },
        projects: {
          eliteshop: {
            title: "Boutique en ligne EliteShop",
            description: "Site e-commerce moderne avec paiement intégré et interface intuitive"
          },
          drbenali: {
            title: "Cabinet Médical Dr. Benali",
            description: "Site vitrine professionnel avec système de prise de rendez-vous"
          },
          yasmine: {
            title: "Restaurant Yasmine",
            description: "Identité visuelle complète avec logo, menu digital et supports marketing"
          },
          techsolutions: {
            title: "Formation PME TechSolutions",
            description: "Formation complète WhatsApp Business pour optimiser la communication client"
          },
          samir: {
            title: "Portfolio Architecte Samir",
            description: "Site portfolio élégant pour présenter les réalisations architecturales"
          },
          innovtech: {
            title: "Startup InnovTech",
            description: "Création d'identité visuelle moderne pour startup technologique"
          }
        }
      },
      // Testimonials
      testimonials: {
        title: "Ce Que Disent Nos Clients",
        subtitle: "Témoignages authentiques de nos clients satisfaits",
        testimonials: {
          eliteshop: {
            name: "Ahmed Benali",
            position: "Directeur, EliteShop",
            content: "Digital Nexus a transformé notre présence en ligne. Notre site e-commerce génère maintenant 3 fois plus de ventes qu'avant. L'équipe est professionnelle et à l'écoute."
          },
          agencedigitale: {
            name: "Sarah Martinez",
            position: "Directrice Marketing, AgenceDigitale+",
            content: "Digital Nexus a révolutionné notre approche marketing. Leur expertise en stratégie digitale et leur créativité ont permis d'augmenter notre visibilité en ligne de 200% en seulement 3 mois. Un partenaire de confiance que je recommande vivement !"
          },
          yasmine: {
            name: "Karim Yasmine",
            position: "Propriétaire, Restaurant Yasmine",
            content: "L'identité visuelle créée par Digital Nexus a donné une nouvelle dimension à notre restaurant. Nos menus digitaux et notre présence en ligne attirent de nombreux clients."
          }
        }
      },
      // Pricing
      pricing: {
        title: "Nos Tarifs Transparents",
        subtitle: "Choisissez l'offre qui correspond le mieux à vos besoins et votre budget",
        mostPopular: "Le plus populaire",
        testOffer: "Offre de test",
        requestQuote: "Demander un devis",
        choosePlan: "Choisir ce pack",
        monthlyPayment: "Paiement 3x: {{amount}}",
        specialOffer: {
          title: "Offre Spéciale \"Digital Pack\"",
          description: "Site Pro + 3 mois réseaux sociaux + 1 vidéo promo",
          cta: "Profiter de l'offre"
        },
        calculator: {
          title: "Calculateur de Budget",
          selectServices: "Sélectionnez vos services :",
          summary: "Récapitulatif",
          total: "Total estimé",
          monthlyPayment: "Paiement 3x",
          cta: "Demander un devis personnalisé",
          services: {
            website: "Site vitrine",
            ecommerce: "Site e-commerce",
            branding: "Branding complet",
            whatsapp: "Formation WhatsApp Business",
            seo: "Optimisation SEO"
          }
        },
        plans: {
          discovery: {
            name: "Offre Découverte",
            price: "15k DZ",
            description: "Parfait pour tester nos services",
            features: [
              "Site 1 page responsive",
              "Design moderne et attractif",
              "Hébergement 6 mois inclus",
              ".dz domain included",
              "Formulaire de contact",
              "Optimisation mobile",
              "Support 1 mois"
            ],
            monthlyPayment: "15k DZ comptant"
          },
          starter: {
            name: "Pack Starter",
            price: "30k - 50k DZ",
            description: "Site vitrine basique",
            features: [
              "3 à 5 pages",
              "Template moderne",
              "Hébergement + domaine .dz 1 an",
              "Design responsive",
              "Formulaire de contact",
              "SEO basique",
              "Livraison 7-10 jours"
            ],
            monthlyPayment: "10k DZ/mois"
          },
          pro: {
            name: "Pack Pro",
            price: "80k - 150k DZ",
            description: "Site avancé ou e-commerce",
            features: [
              "10-15 pages ou e-commerce",
              "Design semi-personnalisé",
              "Hébergement performant",
              "SEO optimisé",
              "Intégration paiement",
              "Blog + Google Analytics",
              "2 mois support gratuit"
            ],
            monthlyPayment: "50k DZ/mois"
          },
          custom: {
            name: "Pack Sur Mesure",
            price: "200k+ DZ",
            description: "Solution 100% personnalisée",
            features: [
              "Développement from scratch",
              "Design UX/UI unique",
              "Fonctionnalités sur mesure",
              "Hébergement VPS sécurisé",
              "Formation complète",
              "SEO/SEA inclus",
              "6 mois maintenance"
            ],
            monthlyPayment: "70k DZ/mois"
          }
        }
      },
      // Contact
      contact: {
        title: "Parlons de votre projet",
        subtitle: "Prêt à transformer votre présence en ligne ? Contactez-nous pour discuter de votre projet.",
        info: {
          address: {
            title: "Notre Adresse",
            details: "Avenue Khemisti, Mostaganem, Algérie"
          },
          phone: {
            title: "Téléphone",
            details: "+213 666 47 53 67"
          },
          email: {
            title: "Email",
            details: "digitaldznexus@gmail.com"
          }
        },
        form: {
          firstName: "Prénom",
          firstNamePlaceholder: "Votre prénom",
          lastName: "Nom",
          lastNamePlaceholder: "Votre nom",
          email: "Email",
          emailPlaceholder: "votre@email.com",
          phone: "Téléphone",
          phonePlaceholder: "+213 XXX XX XX XX",
          projectType: "Type de projet",
          selectProjectType: "Sélectionnez un type de projet",
          projectTypes: {
            website: "Site Web",
            ecommerce: "E-commerce",
            webapp: "Application Web",
            other: "Autre"
          },
          budget: "Budget estimé",
          selectBudget: "Sélectionnez un budget",
          budgets: {
            small: "Moins de 50 000 DA",
            medium: "50 000 - 150 000 DA",
            large: "150 000 DA et plus"
          },
          description: "Description du projet",
          descriptionPlaceholder: "Décrivez votre projet en quelques mots...",
          contactPreference: "Préférence de contact",
          selectContactMethods: "Sélectionnez une méthode de contact",
          contactMethods: {
            email: "Email",
            phone: "Téléphone",
            whatsapp: "WhatsApp"
          },
          availability: "Disponibilité (optionnel)",
          availabilityPlaceholder: "Ex: Tous les après-midis, 9h-12h...",
          summary: "Récapitulatif",
          previous: "Précédent",
          submit: "Envoyer",
          success: "Votre demande a bien été envoyée !",
          error: "Une erreur s'est produite. Veuillez réessayer.",
          errors: {
            firstName: "Ce champ est requis",
            lastName: "Ce champ est requis",
            email: "Email invalide",
            phone: "Ce champ est requis",
            projectType: "Veuillez sélectionner un type de projet",
            contactMethods: "Veuillez sélectionner une méthode de contact"
          }
        }
      },
      common: {
        loading: "Chargement...",
        error: "Une erreur s'est produite",
        success: "Succès !"
      },
      values: {
        title: "Nos Valeurs",
        subtitle: "Les principes qui guident notre excellence",
        description: "Découvrez ce qui fait de Digital Nexus votre partenaire de confiance pour votre transformation digitale.",
        innovation: {
          title: "Innovation",
          description: "Nous repoussons constamment les limites pour créer des solutions web avant-gardistes."
        },
        engagement: {
          title: "Engagement",
          description: "Votre réussite est notre priorité. Nous nous engageons à 100% dans chaque projet."
        },
        excellence: {
          title: "Excellence",
          description: "Nous visons l'excellence dans chaque détail pour des résultats qui dépassent vos attentes."
        },
        collaboration: {
          title: "Collaboration",
          description: "Nous travaillons en étroite collaboration avec vous pour donner vie à votre vision."
        },
        stats: {
          projects: "Projets réalisés",
          clients: "Clients satisfaits",
          years: "Années d'expérience"
        }
      },
      footer: {
        description: "Votre partenaire digital en Algérie pour créer, développer et propulser votre présence en ligne.",
        company: "Entreprise",
        services: {
          title: "Services",
          web: "Création Sites Web",
          whatsapp: "Formation WhatsApp",
          branding: "Branding Digital"
        },
        contact: {
          title: "Contact",
          phone: "+213 666 47 53 67",
          email: "digitaldznexus@gmail.com",
          address: "Avenue Khemisti, Mostaganem, Algérie"
        },
        copyright: "© {{year}} Digital Nexus. Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation"
      },
      figma: {
        title: 'Notre Processus de Design',
        subtitle: 'Découvrez notre approche du design à travers nos projets Figma',
        process: {
          title: 'Notre Processus',
          illustrationAlt: 'Processus de design',
          steps: {
            research: {
              title: 'Recherche & Wireframes',
              description: 'Nous commençons par comprendre vos besoins et créer des wireframes pour structurer l\'information.'
            },
            design: {
              title: 'Design UI/UX',
              description: 'Création d\'interfaces modernes et intuitives en suivant les dernières tendances.'
            },
            prototype: {
              title: 'Prototypage',
              description: 'Création de prototypes interactifs pour tester l\'expérience utilisateur.'
            },
            development: {
              title: 'Développement',
              description: 'Transformation des designs en sites web et applications fonctionnels.'
            }
          }
        },
        projects: {
          designSystem: {
            category: 'Maquettes Web',
            title: 'Design System Digital Nexus',
            description: 'Notre système de design complet avec composants, styles et guidelines'
          },
          uiKit: {
            category: 'UI Kit',
            title: 'Composants Réutilisables',
            description: 'Bibliothèque de composants UI modernes et personnalisables'
          },
          ecommerce: {
            category: 'Études de Cas',
            title: 'Refonte E-commerce',
            description: 'Processus complet de redesign d\'une plateforme e-commerce'
          },
          mobileApp: {
            category: 'Prototypes',
            title: 'Application Mobile',
            description: 'Prototype interactif d\'une application de livraison'
          }
        },
        viewProject: 'Voir le projet'
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "أعمالنا",
        testimonials: "آراء العملاء",
        pricing: "الأسعار",
        contact: "اتصل بنا",
        getQuote: "طلب عرض سعر"
      },
      // Hero Section
      hero: {
        badge: "Digital Nexus - عميلك الرقمي",
        why: "لماذا",
        title: "80% من العملاء يبحثون على الإنترنت أولاً؟",
        subtitle: "مع موقع إحترافي، حتى موقع بسيط، يمكنك:",
        benefits: {
          credibility: {
            title: "تضاعف إعتمادك",
            description: "عنوان حقيقي، صور معتمدة، آراء"
          },
          clients: {
            title: "احصل على عملاء 24/7",
            description: "حتى عندما تنام!"
          },
          calls: {
            title: "تجنب المكالمات غير الضرورية",
            description: "الأسعار والمعلومات متاحة على الإنترنت"
          }
        },
        pricing: {
          from: "بدءً من",
          only: "فقط"
        },
        cta: {
          discuss: "دعنا نتحدث؟",
          services: "شاهد خدماتنا"
        },
        discoverServices: "اكتشف خدماتنا",
        viewWork: "شاهد أعمالنا",
        projectsCompleted: "مشروع منجز",
        clientsSatisfied: "عميل راضٍ",
        yearsExperience: "سنوات خبرة"
      },
      // Services
      services: {
        title: "خدماتنا المتميزة",
        subtitle: "من التصميم إلى التنفيذ، نرافقك في تحولك الرقمي",
        websiteCreation: {
          title: "إنشاء المواقع الإلكترونية",
          description: "مواقع تعريفية، متاجر إلكترونية وتطبيقات ويب مخصصة. تصميم عصري ومحسن لجميع الأجهزة.",
          price: "ابتداءً من 30 ألف دج"
        },
        whatsappTraining: {
          title: "تدريب واتساب بيزنس",
          description: "أتقن واتساب بيزنس لتطوير عملائك وتحسين تواصلك.",
          status: "قيد التطوير"
        },
        branding: {
          title: "العلامة التجارية الرقمية",
          description: "إنشاء هويات بصرية قوية ومتماسكة لترك انطباع والتميز.",
          status: "قيد التطوير"
        }
      },
      // Portfolio
      portfolio: {
        title: "معرض أعمالنا",
        subtitle: "اكتشف مشاريعنا المنجزة بنجاح",
        filters: {
          all: "جميع المشاريع",
          website: "مواقع الويب",
          whatsapp: "واتساب بيزنس",
          branding: "العلامة التجارية"
        },
        categories: {
          website: "موقع الويب",
          whatsapp: "واتساب بيزنس",
          branding: "العلامة التجارية"
        },
        projects: {
          eliteshop: {
            title: "متجر البنوك الإلكترونية EliteShop",
            description: "موقع تجاري إلكتروني متطور مع دفع إلكتروني وواجهة تنقل مباشرة"
          },
          drbenali: {
            title: "مكتب الطب الدكتور بنالي",
            description: "موقع تعريفي مهني مع نظام جدولة المواعيد"
          },
          yasmine: {
            title: "مطعم يسمين",
            description: "هوية بصرية كاملة مع شعار وقائمة رقمية ومواد تسويقية"
          },
          techsolutions: {
            title: "تدريب الشركات الصغيرة والمتوسطة TechSolutions",
            description: "تدريب واتساب بيزنس الكامل لتحسين التواصل مع العملاء"
          },
          samir: {
            title: "محفظة عمار سمير",
            description: "موقع محفظة عمار إلغاني لتقديم الإنجازات المعمارية"
          },
          innovtech: {
            title: "تبديل InnovTech",
            description: "إنشاء هوية بصرية عصرية لتبديل التبديل التكنولوجي"
          }
        }
      },
      // Testimonials
      testimonials: {
        title: "آراء عملائنا",
        subtitle: "ما يقوله عملاؤنا عن خدماتنا وجودة عملنا",
        testimonials: {
          eliteshop: {
            name: "Ahmed Benali",
            position: "Director, EliteShop",
            content: "Digital Nexus has transformed our online presence. Our e-commerce website now generates 3 times more sales than before. The team is professional and attentive."
          },
          agencedigitale: {
            name: "Sarah Martinez",
            position: "Marketing Director, AgenceDigitale+",
            content: "Digital Nexus has revolutionized our marketing approach. Their expertise in digital strategy and creativity has increased our online visibility by 200% in just 3 months. A trusted partner that I highly recommend!"
          },
          yasmine: {
            name: "Karim Yasmine",
            position: "Owner, Yasmine Restaurant",
            content: "The visual identity created by Digital Nexus has given a new dimension to our restaurant. Our digital menus and online presence attract many customers."
          }
        }
      },
      // Pricing
      pricing: {
        title: "أسعارنا الشفافة",
        subtitle: "اختر الباقة التي تناسب احتياجاتك وميزانيتك",
        discovery: {
          title: "عرض الاكتشاف",
          description: "مثالي لتجربة خدماتنا",
          features: [
            "موقع صفحة واحدة متجاوب",
            "تصميم عصري وجذاب",
            "استضافة 6 أشهر مجانية",
            "نطاق .dz مجاني",
            "نموذج اتصال",
            "تحسين للجوال",
            "دعم فني شهر واحد"
          ]
        },
        starter: {
          title: "الباقة الأساسية",
          description: "مثالية للشركات الناشئة",
          features: [
            "موقع تعريفي 5 صفحات",
            "تصميم متجاوب",
            "استضافة سنة كاملة",
            "شهادة SSL مجانية",
            "دعم فني 3 أشهر"
          ]
        },
        professional: {
          title: "الباقة الاحترافية",
          description: "الأكثر طلباً",
          features: [
            "موقع احترافي متكامل",
            "متجر إلكتروني",
            "إدارة المحتوى",
            "تحسين محركات البحث",
            "تدريب مجاني",
            "دعم فني سنة كاملة"
          ]
        },
        custom: {
          title: "باقة مخصصة",
          description: "حلول متقدمة",
          features: [
            "تطوير مخصص",
            "تكامل أنظمة خارجية",
            "تطبيقات متقدمة",
            "استشارة تقنية",
            "دعم فني مدى الحياة"
          ]
        }
      },
      // Contact
      contact: {
        title: "لنتحدث عن مشروعك",
        subtitle: "مستعد لتحويل رؤيتك إلى واقع رقمي؟ اتصل بنا للحصول على عرض سعر مجاني",
        info: {
          address: {
            title: "Notre Adresse",
            details: "Avenue Khemisti, Mostaganem, Algérie"
          },
          phone: {
            title: "Téléphone",
            details: "+213 666 47 53 67"
          },
          email: {
            title: "Email",
            details: "digitaldznexus@gmail.com"
          }
        },
        form: {
          step1: "معلومات الاتصال",
          step2: "الاحتياجات",
          step3: "طرق التواصل",
          firstName: "الاسم الأول",
          firstNamePlaceholder: "Votre prénom",
          lastName: "اللقب",
          lastNamePlaceholder: "Votre nom",
          email: "البريد الإلكتروني",
          emailPlaceholder: "votre@email.com",
          phone: "الهاتف",
          phonePlaceholder: "+213 XXX XX XX XX",
          company: "الشركة",
          projectType: "نوع المشروع",
          selectProjectType: "Sélectionnez un type de projet",
          projectTypes: {
            website: "موقع الويب",
            ecommerce: "متاجر إلكترونية",
            webapp: "تطبيق ويب",
            other: "آخر"
          },
          budget: "الميزانية المتوقعة",
          selectBudget: "Sélectionnez un budget",
          budgets: {
            small: "أقل من 50,000 DA",
            medium: "50,000 - 150,000 DA",
            large: "150,000 DA وأكثر"
          },
          timeline: "المدة المطلوبة",
          description: "وصف المشروع",
          descriptionPlaceholder: "Décrivez votre projet en quelques mots...",
          contactPreference: "طريقة التواصل",
          selectContactMethods: "اختر طريقة التواصل",
          contactMethods: {
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            whatsapp: "واتساب"
          },
          availability: "التوفر (اختياري)",
          availabilityPlaceholder: "Ex: كل الأربعاء, 9h-12h...",
          summary: "ملخص",
          previous: "السابق",
          submit: "إرسال طلبي",
          success: "Votre demande a bien été envoyée !",
          error: "Une erreur s'est produite. Veuillez réessayer.",
          errors: {
            firstName: "هذا الحقل مطلوب",
            lastName: "هذا الحقل مطلوب",
            email: "البريد الإلكتروني غير صالح",
            phone: "هذا الحقل مطلوب",
            projectType: "يرجى تحديد نوع المشروع"
          }
        }
      },
      common: {
        loading: "جاري التحميل...",
        error: "حدث خطأ",
        success: "نجح!"
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        testimonials: "Testimonials",
        pricing: "Pricing",
        contact: "Contact",
        getQuote: "Free Quote"
      },
      // Hero Section
      hero: {
        badge: "Digital Nexus - Your Digital Partner",
        why: "WHY",
        title: "80% of clients search online first?",
        subtitle: "With a professional website, even a basic one, you can:",
        benefits: {
          credibility: {
            title: "Double your credibility",
            description: "Real address, pro photos, testimonials"
          },
          clients: {
            title: "Get clients 24/7",
            description: "Even while you sleep!"
          },
          calls: {
            title: "Avoid unnecessary calls",
            description: "Prices and info already online"
          }
        },
        pricing: {
          from: "Starting from",
          only: "only"
        },
        cta: {
          discuss: "Let's discuss?",
          services: "See our services"
        },
        discoverServices: "Discover our services",
        viewWork: "See our work",
        projectsCompleted: "Projects completed",
        clientsSatisfied: "Satisfied clients",
        yearsExperience: "Years of experience"
      },
      // Services
      services: {
        title: "Our Excellence Services",
        subtitle: "From design to implementation, we guide you through your digital transformation",
        websiteCreation: {
          title: "Web Development",
          description: "Showcase websites, e-commerce and custom web applications. Modern design optimized for all devices.",
          price: "Starting from 30k DZ"
        },
        whatsappTraining: {
          title: "WhatsApp Business Training",
          description: "Master WhatsApp Business to grow your customer base and optimize your communication.",
          status: "In development"
        },
        branding: {
          title: "Digital Branding",
          description: "Create strong and consistent visual identities to make an impact and stand out.",
          status: "In development"
        }
      },
      // Portfolio
      portfolio: {
        title: "Our Work",
        subtitle: "Discover some of our most remarkable projects",
        filters: {
          all: "All Projects",
          website: "Websites",
          whatsapp: "WhatsApp Business",
          branding: "Branding"
        },
        categories: {
          website: "Website",
          whatsapp: "WhatsApp",
          branding: "Branding"
        },
        projects: {
          eliteshop: {
            title: "EliteShop Online Store",
            description: "Modern e-commerce website with integrated payment and intuitive interface"
          },
          drbenali: {
            title: "Dr. Benali Medical Office",
            description: "Professional showcase website with appointment booking system"
          },
          yasmine: {
            title: "Yasmine Restaurant",
            description: "Complete visual identity with logo, digital menu and marketing materials"
          },
          techsolutions: {
            title: "TechSolutions SME Training",
            description: "Complete WhatsApp Business training to optimize customer communication"
          },
          samir: {
            title: "Architect Samir Portfolio",
            description: "Elegant portfolio website to showcase architectural achievements"
          },
          innovtech: {
            title: "InnovTech Startup",
            description: "Modern visual identity creation for technology startup"
          }
        }
      },
      // Testimonials
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Authentic testimonials from our satisfied clients",
        testimonials: {
          eliteshop: {
            name: "Ahmed Benali",
            position: "Director, EliteShop",
            content: "Digital Nexus has transformed our online presence. Our e-commerce website now generates 3 times more sales than before. The team is professional and attentive."
          },
          agencedigitale: {
            name: "Sarah Martinez",
            position: "Marketing Director, AgenceDigitale+",
            content: "Digital Nexus has revolutionized our marketing approach. Their expertise in digital strategy and creativity has increased our online visibility by 200% in just 3 months. A trusted partner that I highly recommend!"
          },
          yasmine: {
            name: "Karim Yasmine",
            position: "Owner, Yasmine Restaurant",
            content: "The visual identity created by Digital Nexus has given a new dimension to our restaurant. Our digital menus and online presence attract many customers."
          }
        }
      },
      // Pricing
      pricing: {
        title: "Our Transparent Pricing",
        subtitle: "Choose the plan that best fits your needs and budget",
        mostPopular: "Most Popular",
        testOffer: "Test Offer",
        requestQuote: "Request a Quote",
        choosePlan: "Choose this Plan",
        monthlyPayment: "3x Payment: {{amount}}",
        specialOffer: {
          title: "Special \"Digital Pack\" Offer",
          description: "Pro Website + 3 months social media + 1 promo video",
          cta: "Get the Offer"
        },
        calculator: {
          title: "Budget Calculator",
          selectServices: "Select your services:",
          summary: "Summary",
          total: "Estimated Total",
          monthlyPayment: "3x Payment",
          cta: "Request a Custom Quote",
          services: {
            website: "Business Website",
            ecommerce: "E-commerce Website",
            branding: "Complete Branding",
            whatsapp: "WhatsApp Business Training",
            seo: "SEO Optimization"
          }
        },
        plans: {
          discovery: {
            name: "Discovery Offer",
            price: "15k DZ",
            description: "Perfect for testing our services",
            features: [
              "1-page responsive website",
              "Modern and attractive design",
              "6 months hosting included",
              ".dz domain included",
              "Contact form",
              "Mobile optimization",
              "1 month support"
            ],
            monthlyPayment: "15k DZ upfront"
          },
          starter: {
            name: "Starter Pack",
            price: "30k - 50k DZ",
            description: "Basic business website",
            features: [
              "3-5 pages",
              "Modern template",
              "1 year hosting + .dz domain",
              "Responsive design",
              "Contact form",
              "Basic SEO",
              "7-10 days delivery"
            ],
            monthlyPayment: "10k DZ/month"
          },
          pro: {
            name: "Pro Pack",
            price: "80k - 150k DZ",
            description: "Advanced website or e-commerce",
            features: [
              "10-15 pages or e-commerce",
              "Semi-custom design",
              "High-performance hosting",
              "Optimized SEO",
              "Payment integration",
              "Blog + Google Analytics",
              "2 months free support"
            ],
            monthlyPayment: "50k DZ/month"
          },
          custom: {
            name: "Custom Pack",
            price: "200k+ DZ",
            description: "100% customized solution",
            features: [
              "From scratch development",
              "Unique UX/UI design",
              "Custom features",
              "Secure VPS hosting",
              "Complete training",
              "SEO/SEA included",
              "6 months maintenance"
            ],
            monthlyPayment: "70k DZ/month"
          }
        }
      },
      // Contact
      contact: {
        title: "Let's Talk About Your Project",
        subtitle: "Ready to transform your online presence? Contact us to discuss your project.",
        info: {
          address: {
            title: "Our Address",
            details: "Avenue Khemisti, Mostaganem, Algeria"
          },
          phone: {
            title: "Phone",
            details: "+213 666 47 53 67"
          },
          email: {
            title: "Email",
            details: "digitaldznexus@gmail.com"
          }
        },
        form: {
          firstName: "First Name",
          firstNamePlaceholder: "Your first name",
          lastName: "Last Name",
          lastNamePlaceholder: "Your last name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          phone: "Phone",
          phonePlaceholder: "+213 XXX XX XX XX",
          projectType: "Project Type",
          selectProjectType: "Select a project type",
          projectTypes: {
            website: "Website",
            ecommerce: "E-commerce",
            webapp: "Web Application",
            other: "Other"
          },
          budget: "Estimated Budget",
          selectBudget: "Select a budget",
          budgets: {
            small: "Less than 50,000 DA",
            medium: "50,000 - 150,000 DA",
            large: "150,000 DA and more"
          },
          description: "Project Description",
          descriptionPlaceholder: "Describe your project in a few words...",
          contactPreference: "Contact Preference",
          selectContactMethods: "Select a contact method",
          contactMethods: {
            email: "Email",
            phone: "Phone",
            whatsapp: "WhatsApp"
          },
          availability: "Availability (optional)",
          availabilityPlaceholder: "Ex: Every afternoon, 9am-12pm...",
          summary: "Summary",
          previous: "Previous",
          submit: "Send",
          success: "Votre demande a bien été envoyée !",
          error: "Une erreur s'est produite. Veuillez réessayer.",
          errors: {
            firstName: "This field is required",
            lastName: "This field is required",
            email: "Invalid email",
            phone: "This field is required",
            projectType: "Please select a project type"
          }
        }
      },
      common: {
        loading: "Loading...",
        error: "An error occurred",
        success: "Success!"
      },
      values: {
        title: "Our Values",
        subtitle: "The principles that guide our excellence",
        description: "Discover what makes Digital Nexus your trusted partner for digital transformation.",
        innovation: {
          title: "Innovation",
          description: "We constantly push boundaries to create cutting-edge web solutions."
        },
        engagement: {
          title: "Commitment",
          description: "Your success is our priority. We are 100% committed to every project."
        },
        excellence: {
          title: "Excellence",
          description: "We aim for excellence in every detail for results that exceed your expectations."
        },
        collaboration: {
          title: "Collaboration",
          description: "We work closely with you to bring your vision to life."
        },
        stats: {
          projects: "Projects completed",
          clients: "Satisfied clients",
          years: "Years of experience"
        }
      },
      footer: {
        description: "Your digital partner in Algeria to create, develop and boost your online presence.",
        company: "Company",
        services: {
          title: "Services",
          web: "Web Development",
          whatsapp: "WhatsApp Training",
          branding: "Digital Branding"
        },
        contact: {
          title: "Contact",
          phone: "+213 666 47 53 67",
          email: "digitaldznexus@gmail.com",
          address: "Avenue Khemisti, Mostaganem, Algeria"
        },
        copyright: "© {{year}} Digital Nexus. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use"
      },
      figma: {
        title: 'Our Design Process',
        subtitle: 'Discover our design approach through our Figma projects',
        process: {
          title: 'Our Process',
          illustrationAlt: 'Design process',
          steps: {
            research: {
              title: 'Research & Wireframes',
              description: 'We start by understanding your needs and creating wireframes to structure the information.'
            },
            design: {
              title: 'UI/UX Design',
              description: 'Creating modern and intuitive interfaces following the latest trends.'
            },
            prototype: {
              title: 'Prototyping',
              description: 'Creating interactive prototypes to test the user experience.'
            },
            development: {
              title: 'Development',
              description: 'Transforming designs into functional websites and applications.'
            }
          }
        },
        projects: {
          designSystem: {
            category: 'Web Mockups',
            title: 'Digital Nexus Design System',
            description: 'Our complete design system with components, styles, and guidelines'
          },
          uiKit: {
            category: 'UI Kit',
            title: 'Reusable Components',
            description: 'Library of modern and customizable UI components'
          },
          ecommerce: {
            category: 'Case Studies',
            title: 'E-commerce Redesign',
            description: 'Complete process of redesigning an e-commerce platform'
          },
          mobileApp: {
            category: 'Prototypes',
            title: 'Mobile Application',
            description: 'Interactive prototype of a delivery application'
          }
        },
        viewProject: 'View Project'
      }
    }
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
