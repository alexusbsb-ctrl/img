

/* ============================================================
   ALEXMKT
   TRACKING GERADO AUTOMATICAMENTE

   Landing ID:
   LAND-20260818-171639-7SW3N

============================================================ */

(function () {

  "use strict";


  /* ==========================================================
     CONFIGURAÇÃO
  ========================================================== */

  var ALEXMKT_TRACKING = {

    pixelMeta:
      "123456",

    googleAnalytics:
      "G-123456",

    googleAds:
      "AW-123456",

    googleAdsLabel:
      "ABCDEFG",

    utmSource:
      "instagram",

    utmMedium:
      "paid",

    utmCampaign:
      "campanha4",

    landingId:
      "LAND-20260818-171639-7SW3N"

  };


  /* ==========================================================
     FUNÇÃO AUXILIAR
  ========================================================== */

  function temValor(valor) {

    return (
      valor !== undefined &&
      valor !== null &&
      String(valor).trim() !== ""
    );

  }


  /* ==========================================================
     UTM
  ========================================================== */

  function capturarUTM() {

    try {

      var params =
        new URLSearchParams(
          window.location.search
        );


      var utm = {

        source:
          params.get("utm_source") ||
          ALEXMKT_TRACKING.utmSource ||
          "",

        medium:
          params.get("utm_medium") ||
          ALEXMKT_TRACKING.utmMedium ||
          "",

        campaign:
          params.get("utm_campaign") ||
          ALEXMKT_TRACKING.utmCampaign ||
          "",

        term:
          params.get("utm_term") ||
          "",

        content:
          params.get("utm_content") ||
          ""

      };


      /*
       * Salvar somente se houver algum UTM.
       */

      if (
        temValor(utm.source) ||
        temValor(utm.medium) ||
        temValor(utm.campaign) ||
        temValor(utm.term) ||
        temValor(utm.content)
      ) {

        sessionStorage.setItem(
          "alexmkt_utm",
          JSON.stringify(utm)
        );

      }


      return utm;

    }

    catch (erro) {

      console.warn(
        "AlexMKT: erro ao capturar UTM",
        erro
      );

      return {};

    }

  }


  /* ==========================================================
     RECUPERAR UTM
  ========================================================== */

  function obterUTM() {

    try {

      var salvo =
        sessionStorage.getItem(
          "alexmkt_utm"
        );


      if (salvo) {

        return JSON.parse(
          salvo
        );

      }

    }

    catch (erro) {

      console.warn(
        "AlexMKT: erro ao recuperar UTM",
        erro
      );

    }


    return {};

  }


  /* ==========================================================
     META PIXEL
  ========================================================== */

  function inicializarMetaPixel() {

    if (
      !temValor(
        ALEXMKT_TRACKING.pixelMeta
      )
    ) {

      return;

    }


    /*
     * Não criar duas vezes.
     */

    if (
      typeof window.fbq === "function"
    ) {

      return;

    }


    !function(f,b,e,v,n,t,s) {

      if(f.fbq)return;

      n=f.fbq=function(){

        n.callMethod ?

        n.callMethod.apply(
          n,
          arguments
        ) :

        n.queue.push(arguments);

      };


      if(!f._fbq)
        f._fbq=n;


      n.push=n;


      n.loaded=true;


      n.version="2.0";


      n.queue=[];


      t=b.createElement(e);


      t.async=true;


      t.src=v;


      s=b.getElementsByTagName(e)[0];


      s.parentNode.insertBefore(
        t,
        s
      );

    }(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );


    window.fbq(
      "init",
      ALEXMKT_TRACKING.pixelMeta
    );


    window.fbq(
      "track",
      "PageView"
    );

  }


  /* ==========================================================
     GOOGLE ANALYTICS 4
  ========================================================== */

  function inicializarGoogleAnalytics() {

    if (
      !temValor(
        ALEXMKT_TRACKING.googleAnalytics
      )
    ) {

      return;

    }


    /*
     * Evita carregar o script duas vezes.
     */

    if (
      document.querySelector(
        'script[data-alexmkt-ga="true"]'
      )
    ) {

      return;

    }


    window.dataLayer =
      window.dataLayer ||
      [];


    window.gtag =
      window.gtag ||
      function() {

        window.dataLayer.push(
          arguments
        );

      };


    var script =
      document.createElement(
        "script"
      );


    script.async = true;


    script.src =
      "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(
        ALEXMKT_TRACKING.googleAnalytics
      );


    script.setAttribute(
      "data-alexmkt-ga",
      "true"
    );


    document.head.appendChild(
      script
    );


    window.gtag(
      "js",
      new Date()
    );


    window.gtag(
      "config",
      ALEXMKT_TRACKING.googleAnalytics
    );

  }


  /* ==========================================================
     GOOGLE ADS
  ========================================================== */

  function inicializarGoogleAds() {

    if (
      !temValor(
        ALEXMKT_TRACKING.googleAds
      )
    ) {

      return;

    }


    /*
     * Google Ads utiliza gtag.
     *
     * Se GA4 não estiver configurado,
     * criamos o dataLayer mesmo assim.
     */

    window.dataLayer =
      window.dataLayer ||
      [];


    window.gtag =
      window.gtag ||
      function() {

        window.dataLayer.push(
          arguments
        );

      };


    /*
     * Configuração da tag Google Ads.
     */

    window.gtag(
      "config",
      ALEXMKT_TRACKING.googleAds
    );

  }


  /* ==========================================================
     EVENTO GENÉRICO
  ========================================================== */

  function enviarEvento(
    nomeEvento,
    parametros
  ) {

    parametros =
      parametros ||
      {};


    /*
     * --------------------------------------------------------
     * META
     * --------------------------------------------------------
     */

    if (
      typeof window.fbq === "function"
    ) {

      try {

        if (
          nomeEvento === "cta_click" ||
          nomeEvento === "lead"
        ) {

          window.fbq(
            "track",
            "Lead",
            parametros
          );

        }

        else {

          window.fbq(
            "trackCustom",
            nomeEvento,
            parametros
          );

        }

      }

      catch (erroMeta) {

        console.warn(
          "AlexMKT: erro Meta Pixel",
          erroMeta
        );

      }

    }


    /*
     * --------------------------------------------------------
     * GA4
     * --------------------------------------------------------
     */

    if (
      typeof window.gtag === "function"
    ) {

      try {

        window.gtag(
          "event",
          nomeEvento,
          parametros
        );

      }

      catch (erroGA) {

        console.warn(
          "AlexMKT: erro Google Analytics",
          erroGA
        );

      }

    }

  }


  /* ==========================================================
     CONVERSÃO GOOGLE ADS
  ========================================================== */

  function enviarConversaoGoogleAds() {

    if (
      !temValor(
        ALEXMKT_TRACKING.googleAds
      )
    ) {

      return;

    }


    if (
      typeof window.gtag !== "function"
    ) {

      return;

    }


    /*
     * Se existir conversion label,
     * monta o identificador completo.
     */

    var conversao =
      ALEXMKT_TRACKING.googleAds;


    if (
      temValor(
        ALEXMKT_TRACKING.googleAdsLabel
      )
    ) {

      conversao +=
        "/" +
        ALEXMKT_TRACKING.googleAdsLabel;

    }


    try {

      window.gtag(
        "event",
        "conversion",
        {

          send_to:
            conversao

        }
      );

    }

    catch (erro) {

      console.warn(
        "AlexMKT: erro Google Ads Conversion",
        erro
      );

    }

  }


  /* ==========================================================
     RASTREAR CTA
  ========================================================== */

  function rastrearCTAs() {

    var ctas =
      document.querySelectorAll(
        '[data-event="cta_click"]'
      );


    if (
      !ctas ||
      !ctas.length
    ) {

      return;

    }


    ctas.forEach(
      function(cta) {

        /*
         * Evita registrar o mesmo CTA duas vezes.
         */

        if (
          cta.getAttribute(
            "data-alexmkt-tracking"
          ) === "true"
        ) {

          return;

        }


        cta.setAttribute(
          "data-alexmkt-tracking",
          "true"
        );


        cta.addEventListener(
          "click",
          function(event) {

            var utm =
              obterUTM();


            var parametros = {

              landing_id:
                ALEXMKT_TRACKING.landingId,

              utm_source:
                utm.source || "",

              utm_medium:
                utm.medium || "",

              utm_campaign:
                utm.campaign || "",

              utm_term:
                utm.term || "",

              utm_content:
                utm.content || "",

              cta_text:
                String(
                  cta.innerText ||
                  cta.textContent ||
                  ""
                ).trim()

            };


            /*
             * Evento principal
             */

            enviarEvento(
              "cta_click",
              parametros
            );


            /*
             * Lead
             */

            enviarEvento(
              "lead",
              parametros
            );


            /*
             * Google Ads
             */

            enviarConversaoGoogleAds();


            /*
             * ------------------------------------------------
             * NAVEGAÇÃO SEGURA
             * ------------------------------------------------
             *
             * Mantém o comportamento atual do link,
             * mas permite que os comandos de tracking
             * sejam enviados antes da navegação.
             *
             * Não interfere em:
             *
             * • links internos
             * • nova aba
             * • modificadores de teclado
             */

            var href =
              cta.getAttribute(
                "href"
              );


            if (
              !href ||
              href === "#" ||
              href.indexOf("javascript:") === 0
            ) {

              return;

            }


            /*
             * Não interceptar:
             *
             * • Ctrl
             * • Cmd
             * • Shift
             * • Alt
             * • botão diferente do esquerdo
             * • target diferente de _self
             */

            if (
              event.ctrlKey ||
              event.metaKey ||
              event.shiftKey ||
              event.altKey ||
              event.button !== 0 ||
              cta.target === "_blank"
            ) {

              return;

            }


            /*
             * Impede a navegação imediata.
             */

            event.preventDefault();


            /*
             * Pequeno intervalo para permitir
             * o processamento das tags.
             */

            setTimeout(
              function() {

                window.location.href =
                  href;

              },
              120
            );

          },
          false
        );

      }
    );

  }


  /* ==========================================================
     INICIALIZAÇÃO
  ========================================================== */

  function iniciarTracking() {

    /*
     * Captura UTM primeiro.
     */

    capturarUTM();


    /*
     * Inicializa plataformas.
     */

    inicializarMetaPixel();


    inicializarGoogleAnalytics();


    inicializarGoogleAds();


    /*
     * Configura CTAs.
     */

    rastrearCTAs();


    /*
     * Evento opcional para debug.
     */

    try {

      window.AlexMKTTracking = {

        config:
          ALEXMKT_TRACKING,

        utm:
          obterUTM(),

        evento:
          enviarEvento

      };

    }

    catch (erro) {

      console.warn(
        "AlexMKT: erro ao criar API pública",
        erro
      );

    }

  }


  /* ==========================================================
     DOM READY
  ========================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      iniciarTracking
    );

  }

  else {

    iniciarTracking();

  }


})();

