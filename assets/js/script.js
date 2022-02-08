importComponents(window.location.pathname);

$(document).ready(function () {
  // Function Solutions Hover
  $("#solutions .cards-solutions .col").hover(
    (e) => {
      let a = e.currentTarget.childNodes[5].childNodes[1].childNodes[1];
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "File icon":
          $(img).attr("src", "./assets/img/icons/file-white.svg");
          $(a).css("color", "#fff");
          break;
        case "Card icon":
          $(img).attr("src", "./assets/img/icons/card-white.svg");
          $(a).css("color", "#fff");
          break;
        case "Frete icon":
          $(img).attr("src", "./assets/img/icons/frete-white.svg");
          $(a).css("color", "#fff");
          break;
        case "Posto icon":
          $(img).attr("src", "./assets/img/icons/posto-white.svg");
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
          $(img).attr("src", "./assets/img/icons/file.svg");
          $(a).css("color", "#005e91");
          break;
        case "Card icon":
          $(img).attr("src", "./assets/img/icons/card.svg");
          $(a).css("color", "#005e91");
          break;
        case "Frete icon":
          $(img).attr("src", "./assets/img/icons/frete.svg");
          $(a).css("color", "#005e91");
          break;
        case "Posto icon":
          $(img).attr("src", "./assets/img/icons/posto.svg");
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
          $(img).attr("src", "../assets/img/icons/security-white.svg");
          break;
        case "Card icon":
          $(img).attr("src", "../assets/img/icons/card-white.svg");
          break;
        case "Time icon":
          $(img).attr("src", "../assets/img/icons/time-white.svg");
          break;
        case "Posto icon":
          $(img).attr("src", "../assets/img/icons/posto-white.svg");
          break;
        case "User security icon":
          $(img).attr("src", "../assets/img/icons/user-security-white.svg");
          break;
        case "File icon":
          $(img).attr("src", "../assets/img/icons/file-white.svg");
          break;
        case "Fone icon":
          $(img).attr("src", "../assets/img/icons/fone-white.svg");
          break;
        case "Search icon":
          $(img).attr("src", "../assets/img/icons/search-white.svg");
          break;
      }
    },
    (e) => {
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "Security icon":
          $(img).attr("src", "../assets/img/icons/security.svg");
          break;
        case "Card icon":
          $(img).attr("src", "../assets/img/icons/card.svg");
          break;
        case "Time icon":
          $(img).attr("src", "../assets/img/icons/time.svg");
          break;
        case "Posto icon":
          $(img).attr("src", "../assets/img/icons/posto.svg");
          break;
        case "User security icon":
          $(img).attr("src", "../assets/img/icons/user-security.svg");
          break;
        case "File icon":
          $(img).attr("src", "../assets/img/icons/file.svg");
          break;
        case "Fone icon":
          $(img).attr("src", "../assets/img/icons/fone.svg");
          break;
        case "Search icon":
          $(img).attr("src", "../assets/img/icons/search.svg");
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
          $(img).attr("src", "../assets/img/icons/dolar-white.svg");
          break;
        case "Truck 2 icon":
          $(img).attr("src", "../assets/img/icons/truck-2-white.svg");
          break;
        case "Mail icon":
          $(img).attr("src", "../assets/img/icons/mail-white.svg");
          break;
        case "Hand dolar icon":
          $(img).attr("src", "../assets/img/icons/hand-dolar-white.svg");
          break;
        case "Fone icon":
          $(img).attr("src", "../assets/img/icons/fone-white.svg");
          break;
        case "Percent icon":
          $(img).attr("src", "../assets/img/icons/percent-white.svg");
          break;
        case "File icon":
          $(img).attr("src", "../assets/img/icons/file-white.svg");
          break;
        case "User security icon":
          $(img).attr("src", "../assets/img/icons/user-security-white.svg");
          break;
      }
    },
    (e) => {
      let img = e.currentTarget.childNodes[1].childNodes[1];
      let imgSelect = e.currentTarget.childNodes[1].childNodes[1].alt;

      switch (imgSelect) {
        case "Dolar icon":
          $(img).attr("src", "../assets/img/icons/dolar.svg");
          break;
        case "Truck 2 icon":
          $(img).attr("src", "../assets/img/icons/truck-2.svg");
          break;
        case "Mail icon":
          $(img).attr("src", "../assets/img/icons/mail.svg");
          break;
        case "Hand dolar icon":
          $(img).attr("src", "../assets/img/icons/hand-dolar.svg");
          break;
        case "Fone icon":
          $(img).attr("src", "../assets/img/icons/fone.svg");
          break;
        case "Percent icon":
          $(img).attr("src", "../assets/img/icons/percent.svg");
          break;
        case "File icon":
          $(img).attr("src", "../assets/img/icons/file.svg");
          break;
        case "User security icon":
          $(img).attr("src", "../assets/img/icons/user-security.svg");
          break;
      }
    }
  );

  $(window).scroll(function () {
    var documentTop = $(document).scrollTop(),
      targetClass = ".my-navbar-fixed",
      animationClass = "my-navbar-fixed-animation";

    if (documentTop >= 100) {
      if (!$(targetClass).hasClass(animationClass)) {
        $(targetClass).addClass(animationClass).hide().fadeIn();
      }
    } else {
      $(targetClass).removeClass(animationClass).fadeOut();
    }
  });
});

function showModal(selector) {
  let divModal = $(selector);

  divModal.hasClass("activeModal")
    ? divModal.removeClass("activeModal").show().fadeOut()
    : divModal.addClass("activeModal").hide().fadeIn();
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
