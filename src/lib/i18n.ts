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
      productModal: {
        signature: "Signature collection",
        priceOnRequest: "Price on request",
        description: "Handcrafted with 14K gold for timeless elegance. A refined creation designed to elevate your unique style.",
        details: {
          material: { label: "Material", value: "14K Solid Gold" },
          finish: { label: "Finish", value: "Mirror Polished" },
          crafting: { label: "Crafting", value: "Handmade in Pristina" },
          delivery: { label: "Delivery", value: "Ready in 4-6 weeks" },
        },
        highlights: {
          item1: "Ethically sourced gold with lifetime care.",
          item2: "Custom sizing consultation with our atelier.",
          item3: "Complimentary engraving for personal stories.",
        },
        highlightsTitle: "Highlights",
        contactCta: "Contact us on WhatsApp",
        contactVisit: "or even better, come give us a visit",
        whatsappMessage: "Hi, I'm interested in \"{{name}}\".\nPhoto: {{image}}\nLink: {{url}}",
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
          catalogTitle:"Discover Our Earrings Collection",
          title: "EARRINGS",
          subtitle: "Frame your face with timeless beauty",
        },
        necklaces: {
          catalogTitle:"Discover Our Necklaces Collection",
          title: "NECKLACES",
          subtitle: "Adorn your elegance with golden grace",
        },
        bracelets: {
          catalogTitle:"Discover Our Braclets Collection",
          title: "BRACELETS",
          subtitle: "Wrap your wrist in golden luxury",
        },
        invitation: {
          title: "Some designs deserve to be seen in person. We welcome you to our store.",
          body: "Experience the craftsmanship up close and let our team guide you to the perfect piece.",
          cta: "Visit our store",
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
      productModal: {
        signature: "Koleksion nënshkrimi",
        priceOnRequest: "Kontaktoni per Çmimin",
        description: "Punuar me dorë nga ari 14K për elegancë të përjetshme. Një krijim i rafinuar për të ngritur stilin tënd unik.",
        details: {
          material: { label: "Materiali", value: "Ari i pastër 14K" },
          finish: { label: "Përfundimi", value: "Përfundim pasqyre" },
          crafting: { label: "Punuar", value: "Punuar me dorë në Prishtinë" },
          delivery: { label: "Dërgesa", value: "Gati për 4-6 javë" },
        },
        highlights: {
          item1: "Ari me burim etik dhe përkujdesje të përjetshme.",
          item2: "Konsultim për masa të personalizuara në atelierin tonë.",
          item3: "Gravim komplementar për histori personale.",
        },
        highlightsTitle: "Pikat kryesore",
        contactCta: "Na kontakto në WhatsApp",
        contactVisit: "ose edhe më mirë, ejani për vizitë",
        whatsappMessage: "Pershendetje, jam i/e interesuar për \"{{name}}\".\nFoto: {{image}}\nLinku: {{url}}",
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
          catalogTitle:"Zbuloni Koleksionin e Vathëve",
          title: "VATHË",
          subtitle: "Thekso fytyrën me bukuri të përjetshme",
        },
        necklaces: {
          catalogTitle:"Zbuloni Koleksionin e Varëseve",
          title: "VARËSE",
          subtitle: "Stolis elegancën tënde me shkëlqim të artë",
        },
        bracelets: {
          catalogTitle:"Zbuloni Koleksionin e Byzylykëve",
          title: "BYZYLYKË",
          subtitle: "Mbështjelle kyçin me luksozitet të artë",
        },
        invitation: {
          title: "Disa dizajne duhen parë nga afër. Jemi të lumtur t'ju presim në dyqan.",
          body: "Përjetoni mjeshtërinë nga afër dhe lejoni ekipin tonë t'ju udhëheqë drejt pjesës së përsosur.",
          cta: "Vizitoni dyqanin tonë",
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
