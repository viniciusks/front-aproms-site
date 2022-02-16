importComponents(window.location.pathname);

$(document).ready(function () {
  // Function Solutions Hover
  $("#solutions .cards-solutions").hover(
    (e) => {
      let a = e.currentTarget.childNodes[5].childNodes[1].childNodes[1];
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "File icon":
          $(img).css("filter", "brightness(0) invert(1)");
          $(a).css("color", "#fff");
          break;
        case "Card icon":
          $(img).css("filter", "brightness(0) invert(1)");
          $(a).css("color", "#fff");
          break;
        case "Frete icon":
          $(img).css("filter", "brightness(0) invert(1)");
          $(a).css("color", "#fff");
          break;
        case "Posto icon":
          $(img).css("filter", "brightness(0) invert(1)");
          $(a).css("color", "#fff");
          break;
      }
    },
    (e) => {
      let a = e.currentTarget.childNodes[5].childNodes[1].childNodes[1];
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "File icon":
          $(img).css("filter", "brightness(1)");
          $(a).css("color", "#005e91");
          break;
        case "Card icon":
          $(img).css("filter", "brightness(1)");
          $(a).css("color", "#005e91");
          break;
        case "Frete icon":
          $(img).css("filter", "brightness(1)");
          $(a).css("color", "#005e91");
          break;
        case "Posto icon":
          $(img).css("filter", "brightness(1)");
          $(a).css("color", "#005e91");
          break;
      }
    }
  );

  $("#options .cards-solutions .col-lg-3").hover(
    (e) => {
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "Security icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Card icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Time icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Posto icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "User security icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "File icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Fone icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Search icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
      }
    },
    (e) => {
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "Security icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Card icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Time icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Posto icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "User security icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "File icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Fone icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Search icon":
          $(img).css("filter", "brightness(1)");
          break;
      }
    }
  );

  $("#benefits .cards-benefits").hover(
    (e) => {
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "Dolar icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Truck 2 icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Mail icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Hand dolar icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Fone icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "Percent icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "File icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
        case "User security icon":
          $(img).css("filter", "brightness(0) invert(1)");
          break;
      }
    },
    (e) => {
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "Dolar icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Truck 2 icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Mail icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Hand dolar icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Fone icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "Percent icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "File icon":
          $(img).css("filter", "brightness(1)");
          break;
        case "User security icon":
          $(img).css("filter", "brightness(1)");
          break;
      }
    }
  );

  $(window).scroll(function () {
    var documentTop = $(document).scrollTop(),
      widthScreen = $(window).width(),
      targetClass = ".my-navbar-fixed",
      animationClass = "my-navbar-fixed-animation";

    if (widthScreen > 975) {
      if (documentTop >= 100) {
        if (!$(targetClass).hasClass(animationClass)) {
          $(targetClass).addClass(animationClass).hide().fadeIn();
        }
      } else {
        $(targetClass).removeClass(animationClass).fadeOut();
      }
    }
  });

  $("#doubt-list li").on("click", (e) => {
    let id = e.currentTarget.id;
    let div = "div#doubt" + id;

    showObject(div);
  });
});

function showObject(selector) {
  let divObject = $(selector);

  divObject.hasClass("activeObject")
    ? divObject.removeClass("activeObject").show().fadeOut()
    : divObject.addClass("activeObject").hide().fadeIn();
}

function importComponents(path) {
  let pathToComponent =
    path.split("/")[1] == "pages" ? "../components" : "./components";

  // Import navbar
  fetch(pathToComponent + "/navbar.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    });

  // Import footer
  fetch(pathToComponent + "/footer.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });

  // Import modals
  fetch(pathToComponent + "/modals.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("div#modalContents").innerHTML = data;
    });
}

function calculoQuebra(selector) {
  // Coleta de variáveis
  let pesoSaida = parseInt($(selector)[0][0].value);
  let valorMercadoria =
    parseFloat($(selector)[0][1].value.replace(",", ".")) / pesoSaida;
  let tipoQuebra = $(selector)[0][2].value;
  let tolerancia = parseFloat($(selector)[0][3].value.replace(",", "."));
  let pesoChegada = parseInt($(selector)[0][4].value);
  let valorDesconto = $(selector)[0][6];

  // Primeiro passo
  // Cálculo do valor da tolerância da quebra
  valorQuebra = pesoSaida * (tolerancia / 100);

  // Segundo passo
  // Cálculo da perda real da mercadoria
  perdaReal = pesoSaida - pesoChegada;

  if (tipoQuebra == "parcial") {
    perdaExcedente = perdaReal - valorQuebra;
    desconto = valorMercadoria * perdaExcedente;
  } else {
    if (perdaReal > valorQuebra) {
      desconto = valorMercadoria * perdaReal;
    } else {
      desconto = 0;
    }
  }

  valorDesconto.value = parseFloat(desconto.toFixed(2));
}
