import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      common: {
        brand: "BINNI GOLD",
        goldLabel: "14K GOLD",
        exploreCollection: "Explore Collection →",
        discoverCollection: "Discover Collection",
        learnMore: "Learn More",
        followInstagram: "Follow on Instagram",
        emailUs: "Email Us",
        getDirections: "Get Directions",
        viewDetails: "View Details"
      },
      nav: {
        about: "About",
        collections: "Collections",
        contact: "Contact",
      },
      home: {
        hero: {
          title: "BINNI GOLD",
          subtitle: "Timeless Elegance in Every Detail",
          cta: "Discover Collection",
        },
        about: {
          heading: "ABOUT\nUS",
          body1: "At Binni Gold, we believe fine jewelry is more than just an accessory - it's a timeless expression of elegance and personal style.",
          body2: "Each piece in our collection is meticulously handcrafted from the finest 14k gold, blending traditional craftsmanship with contemporary design. From the intricate details to the flawless finish, every creation tells a story of dedication to excellence.",
          body3: "Whether you're searching for a special piece to mark life's meaningful moments or seeking to elevate your everyday style, our curated collection offers treasures that transcend fleeting trends.",
        },
        collections: {
          heading: "OUR COLLECTIONS",
          cards: {
            rings: "RINGS",
            earrings: "EARRINGS",
            necklaces: "NECKLACES",
            bracelets: "BRACELETS",
          },
        },
        mostLoved: {
          heading: "OUR MOST LOVED\nCREATIONS",
        },
        contact: {
          heading: "Get In Touch",
          body: "We'd love to hear from you. Whether you have a question about our collections or need assistance, our team is ready to answer all your questions.",
        },
      },
      collectionPages: {
        
        rings: {
          catalogTitle:"Discover Our Ring Collection",
          title: "RINGS",
          subtitle: "Timeless symbols of elegance and commitment",
        },
        earrings: {
          title: "EARRINGS",
          subtitle: "Frame your face with timeless beauty",
        },
        necklaces: {
          title: "NECKLACES",
          subtitle: "Adorn your elegance with golden grace",
        },
        bracelets: {
          title: "BRACELETS",
          subtitle: "Wrap your wrist in golden luxury",
        },
      },
      footer: {
        tagline: "Timeless Elegance Since 2024",
        collections: "COLLECTIONS",
        connect: "CONNECT",
        rights: "© 2024 Binni Gold. All rights reserved. Crafted with excellence.",
      },
      notFound: {
        heading: "404",
        description: "Oops! Page not found",
        cta: "Return to Home",
      },
    },
  },
  sq: {
    translation: {
      common: {
        brand: "BINNI GOLD",
        goldLabel: "AR 14K",
        exploreCollection: "Shfleto Koleksionin →",
        discoverCollection: "Zbulo Koleksionin",
        learnMore: "Mëso Më Shumë",
        followInstagram: "Na ndiq në Instagram",
        emailUs: "Na dërgo email",
        getDirections: "Merr udhëzimet",
        viewDetails:"Shiko Detajet"
      },
      nav: {
        about: "Rreth nesh",
        collections: "Koleksionet",
        contact: "Kontakti",
      },
      home: {
        hero: {
          title: "BINNI GOLD",
          subtitle: "Elegancë e përjetshme në çdo detaj",
          cta: "Zbulo Koleksionin",
        },
        about: {
          heading: "RRETH\nNESH",
          body1: "Te Binni Gold besojmë se bizhuteritë e mira janë më shumë sesa një aksesor – ato janë një shprehje e përhershme e elegancës dhe stilit personal.",
          body2: "Çdo pjesë e koleksionit tonë punohet me dorë nga ari më cilësor 14k, duke bashkuar mjeshtërinë tradicionale me dizajnin bashkëkohor. Nga detajet e imta te përfundimi i përsosur, çdo krijim tregon historinë tonë të përkushtimit ndaj përsosmërisë.",
          body3: "Qoftë për një moment të veçantë apo për të ngritur stilin e përditshëm, koleksioni ynë i kuruar ofron thesare që i rezistojnë kohës.",
        },
        collections: {
          heading: "KOLEKSIONET TONA",
          cards: {
            rings: "UNAZA",
            earrings: "VATHË",
            necklaces: "VARËSE",
            bracelets: "BYZYLYKË",
          },
        },
        mostLoved: {
          heading: "KRIJIMET TONA\nMË TË DASHURA",
        },
        contact: {
          heading: "Na kontaktoni",
          body: "Do të na pëlqente të dëgjonim nga ju. Për çdo pyetje rreth koleksioneve tona ose për ndihmë të mëtejshme, ekipi ynë është gati t'ju përgjigjet.",
        },
      },
      
      collectionPages: {
        rings: {
          catalogTitle:"Zbuloni Koleksionin e Unazave",
          title: "UNAZA",
          subtitle: "Simbol i përjetshëm i elegancës dhe përkushtimit",
        },
        earrings: {
          title: "VATHË",
          subtitle: "Thekso fytyrën me bukuri të përjetshme",
        },
        necklaces: {
          title: "VARËSE",
          subtitle: "Stolis elegancën tënde me shkëlqim të artë",
        },
        bracelets: {
          title: "BYZYLYKË",
          subtitle: "Mbështjelle kyçin me luksozitet të artë",
        },
      },
      footer: {
        tagline: "Elegancë e përjetshme që nga 2024",
        collections: "KOLEKSIONET",
        connect: "KONTAKT",
        rights: "© 2024 Binni Gold. Të gjitha të drejtat e rezervuara. Punuar me përkushtim.",
      },
      notFound: {
        heading: "404",
        description: "Ups! Faqja nuk u gjet",
        cta: "Kthehu në faqen kryesore",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sq",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
