

"use strict";


document.addEventListener(
  "DOMContentLoaded",
  function() {


    const botoes =
      document.querySelectorAll(
        "[data-event='cta_click']"
      );


    botoes.forEach(
      function(botao) {


        botao.addEventListener(
          "click",
          function() {

            console.log(
              "AlexMKT Event: cta_click"
            );

          }
        );

      }
    );


  }
);

