const dict = {
      es: {
        p_title: "Política de Privacidad",
        p_effective: "Fecha de entrada en vigor:",
        p_intro: 'Esta Política de Privacidad explica cómo <strong>Fenix SoulAR</strong> ("nosotros", "nuestro") recopila, utiliza y comparte información cuando visitas nuestro sitio web y páginas relacionadas.',
        p_sec1_title: "Información que recopilamos",
        p_sec1_b1: "<strong>Información de contacto:</strong> si nos contactas, podemos recopilar tu nombre, dirección de correo electrónico y el contenido del mensaje.",
        p_sec1_b2: "<strong>Datos de uso:</strong> información técnica básica como tipo de navegador, información del dispositivo, páginas visitadas y ubicación aproximada derivada de la dirección IP.",
        p_sec1_b3: "<strong>Cookies:</strong> podemos utilizar cookies o tecnologías similares para la funcionalidad esencial del sitio web y análisis.",
        p_sec2_title: "Cómo utilizamos la información",
        p_sec2_b1: "Para operar y mantener el sitio web.",
        p_sec2_b2: "Para responder a consultas y brindar soporte.",
        p_sec2_b3: "Para mejorar el contenido y la experiencia del usuario.",
        p_sec2_b4: "Para proteger contra el fraude, el abuso y los incidentes de seguridad.",
        p_sec3_title: "Intercambio de información",
        p_sec3_text: "No vendemos tu información personal. Podemos compartir información con proveedores de servicios que nos ayudan a operar el sitio web (por ejemplo, alojamiento/análisis) y cuando lo exija la ley.",
        p_sec4_title: "Contacto",
        p_sec4_text: "Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:",
        btn_back: "Volver al inicio",
        contact_label: "Contacto:"
      },
      en: {
        p_title: "Privacy Policy",
        p_effective: "Effective date:",
        p_intro: 'This Privacy Policy explains how <strong>Fenix SoulAR</strong> ("we", "us", "our") collects, uses, and shares information when you visit our website and related pages.',
        p_sec1_title: "Information we collect",
        p_sec1_b1: "<strong>Contact information:</strong> if you contact us, we may collect your name, email address, and message content.",
        p_sec1_b2: "<strong>Usage data:</strong> basic technical information such as browser type, device information, pages visited, and approximate location derived from IP address.",
        p_sec1_b3: "<strong>Cookies:</strong> we may use cookies or similar technologies for essential website functionality and analytics.",
        p_sec2_title: "How we use information",
        p_sec2_b1: "To operate and maintain the website.",
        p_sec2_b2: "To respond to inquiries and provide support.",
        p_sec2_b3: "To improve content and user experience.",
        p_sec2_b4: "To protect against fraud, abuse, and security incidents.",
        p_sec3_title: "Sharing of information",
        p_sec3_text: "We do not sell your personal information. We may share information with service providers that help us operate the website (e.g., hosting/analytics), and when required by law.",
        p_sec4_title: "Contact",
        p_sec4_text: "If you have questions about this Privacy Policy, contact us at:",
        btn_back: "Back to home",
        contact_label: "Contact:"
      }
    };

    function detectLang(){
      const saved = localStorage.getItem("fs_lang");
      if(saved === "es" || saved === "en") return saved;
      const nav = (navigator.language || "es").toLowerCase();
      return nav.startsWith("es") ? "es" : "en";
    }

    function setLang(lang){
      const d = dict[lang] || dict.es;
      document.documentElement.lang = lang;
      document.querySelectorAll("[data-i18n]").forEach(el=>{
        const key = el.getAttribute("data-i18n");
        if(d[key]) el.innerHTML = d[key];
      });
      document.getElementById("btnES").classList.toggle("active", lang==="es");
      document.getElementById("btnEN").classList.toggle("active", lang==="en");
      localStorage.setItem("fs_lang", lang);
    }

    document.getElementById("btnES").addEventListener("click", ()=>setLang("es"));
    document.getElementById("btnEN").addEventListener("click", ()=>setLang("en"));
    
    // Inicializar
    setLang(detectLang());
    document.getElementById("year").textContent = new Date().getFullYear();
