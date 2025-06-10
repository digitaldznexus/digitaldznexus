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
        title: "Transformez Votre Vision en",
        titleHighlight: "Réalité Digitale",
        subtitle: "Votre partenaire digital en Algérie pour créer, développer et propulser votre présence en ligne",
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
      // Contact
      contact: {
        title: "Parlons de Votre Projet",
        subtitle: "Prêt à transformer votre vision en réalité digitale ? Contactez-nous pour un devis gratuit",
        form: {
          step1: "Coordonnées",
          step2: "Besoins",
          step3: "Contact",
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          company: "Entreprise",
          projectType: "Type de projet",
          budget: "Budget prévu",
          timeline: "Délai souhaité",
          description: "Description du projet",
          next: "Suivant",
          previous: "Précédent",
          submit: "Envoyer ma demande"
        }
      },
      common: {
        loading: "Chargement...",
        error: "Une erreur s'est produite",
        success: "Succès !"
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
        title: "حول رؤيتك إلى",
        titleHighlight: "واقع رقمي",
        subtitle: "شريكك الرقمي في الجزائر لإنشاء وتطوير ودفع حضورك على الإنترنت",
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
        subtitle: "اكتشف مشاريعنا المنجزة بنجاح"
      },
      // Testimonials
      testimonials: {
        title: "آراء عملائنا",
        subtitle: "ما يقوله عملاؤنا عن خدماتنا وجودة عملنا"
      },
      // Pricing
      pricing: {
        title: "أسعارنا الشفافة",
        subtitle: "اختر الباقة التي تناسب احتياجاتك وميزانيتك",
        discovery: {
          title: "عرض الاكتشاف",
          description: "مثالي للبداية",
          features: [
            "موقع صفحة واحدة",
            "استضافة 6 أشهر",
            "دعم فني أساسي",
            "تصميم احترافي"
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
        form: {
          step1: "معلومات الاتصال",
          step2: "الاحتياجات",
          step3: "طرق التواصل",
          firstName: "الاسم الأول",
          lastName: "اللقب",
          email: "البريد الإلكتروني",
          phone: "الهاتف",
          company: "الشركة",
          projectType: "نوع المشروع",
          budget: "الميزانية المتوقعة",
          timeline: "المدة المطلوبة",
          description: "وصف المشروع",
          next: "التالي",
          previous: "السابق",
          submit: "إرسال طلبي"
        }
      },
      common: {
        loading: "جاري التحميل...",
        error: "حدث خطأ",
        success: "نجح!"
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
