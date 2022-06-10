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

  // $(window).scroll(function () {
  //   var documentTop = $(document).scrollTop(),
  //     widthScreen = $(window).width(),
  //     targetClass = ".my-navbar-fixed",
  //     animationClass = "my-navbar-fixed-animation";

  //   if (widthScreen > 975) {
  //     if (documentTop >= 100) {
  //       if (!$(targetClass).hasClass(animationClass)) {
  //         $(targetClass).addClass(animationClass).hide().fadeIn();
  //       }
  //     } else {
  //       $(targetClass).removeClass(animationClass).fadeOut();
  //     }
  //   }
  // });

  const inputDoubt = document.getElementById("doubt");
  if (inputDoubt) {
    inputDoubt.addEventListener("keyup", function (e) {
      var key = e.which || e.keyCode;
      if (key == 13) {
        searchAnwser();
      }
    });
  }

  $("#doubt-list li").on("click", (e) => {
    let id = e.currentTarget.id;
    let div = "div#doubt" + id;

    showObject(div);
  });
});

function searchAnwser() {
  let doubt = $("input#doubt").val().toLowerCase();
  let selector = $("ol#doubt-list");

  for (let index = 0; index < selector[0].children.length; index++) {
    const element = $("li#" + (index + 1));

    element[0].className = "";

    if (index + 1 == 25) {
      break;
    }
  }

  for (let index = 0; index < selector[0].children.length; index++) {
    const element = $("li#" + (index + 1));
    const data = element[0].childNodes[1].childNodes[0].data.toLowerCase();

    if (data.indexOf(doubt) == -1) {
      element[0].className = "doubt-noselected";
    }

    if (index + 1 == 25) {
      break;
    }
  }
}

function showObject(selector, type = 0) {
  if (selector == "div#modalForgotPassword" && type == 0) {
    $("div#modalLogin").removeClass("activeObject").show().fadeOut();
  }

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
      verifyCookies();
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
  let pesoSaida = parseInt($(selector)[0][0].value); // EM KG
  let pesoChegada = parseInt($(selector)[0][1].value); // EM KG
  let valorMercadoria =
    parseFloat($(selector)[0][2].value.replace(",", ".")) / pesoSaida; // VALOR POR KG
  let valorCFrete = parseFloat($(selector)[0][3].value.replace(",", "."));
  let dAdiantamento = parseFloat($(selector)[0][4].value.replace(",", "."));
  let tipoQuebra = $(selector)[0][5].value; // TOTAL OU PARCIAL
  let tolerancia = parseFloat($(selector)[0][6].value.replace(",", ".")); // PERCENTUAL
  let pedagio = parseFloat($(selector)[0][7].value.replace(",", "."));
  let bPedagio = $(selector)[0][8]; // boolean
  let estadia = parseFloat($(selector)[0][9].value.replace(",", "."));
  let bEstadia = $(selector)[0][10]; // boolean
  let dSESTSENAT = parseFloat($(selector)[0][11].value.replace(",", "."));
  let dSegCarga = parseFloat($(selector)[0][12].value.replace(",", "."));
  let dINSS = parseFloat($(selector)[0][13].value.replace(",", "."));
  let dICMS = parseFloat($(selector)[0][14].value.replace(",", "."));
  let dIRFonte = parseFloat($(selector)[0][15].value.replace(",", "."));
  let dTaxaAdm = parseFloat($(selector)[0][16].value.replace(",", "."));
  let dOutros = parseFloat($(selector)[0][17].value.replace(",", "."));

  let adicionais = 0;

  let valorQuebra = $(selector)[0][19]; // EM REAIS
  let valorAPagar = $(selector)[0][20]; // EM REAIS
  let valorDesconto = $(selector)[0][21]; // EM REAIS

  // Somar Descontos independentes
  let totalDescontos =
    dICMS +
    dSegCarga +
    dIRFonte +
    dINSS +
    dSESTSENAT +
    dAdiantamento +
    dTaxaAdm +
    dOutros;

  if (!bPedagio.checked) {
    adicionais += pedagio;
  }

  if (!bEstadia.checked) {
    adicionais += estadia;
  }

  let difPeso = pesoSaida - pesoChegada; // KG

  let ret_pesoCalculo;
  let ret_descQuebra;

  // Primeiro passo
  // Cálculo do valor da tolerância da quebra
  let pesoLimQuebra = pesoSaida * (tolerancia / 100);

  // Indicação de qual peso será utilizado para cálculo de pagamento
  if (pesoChegada > pesoSaida) {
    ret_pesoCalculo = pesoSaida;
    ret_descQuebra = 0;
    perdaExcedente = 0;
  } else {
    ret_pesoCalculo = pesoChegada;

    perdaExcedente = difPeso - pesoLimQuebra;
    // Se a quebra foi menor que a tolerância (em KG)
    if (perdaExcedente > 0) {
      // Cáculo da quebra, divido em PARCIAL e TOTAL
      if (tipoQuebra == "parcial") {
        ret_descQuebra = valorMercadoria * perdaExcedente;
      } else {
        // TOTAL
        ret_descQuebra = valorMercadoria * difPeso;
      }
    } else {
      ret_descQuebra = 0;
    }
  }

  if (valorCFrete > 0) {
    valorDesconto.value = totalDescontos;
    valorQuebra.value = ret_descQuebra;
    valorAPagar.value =
      valorCFrete - ret_descQuebra - totalDescontos + adicionais;
  } else {
    alert("Sem valor da carta frete.");
  }
}

function loginSystem() {
  var cPar =
    "par=" +
    $("#cnpj").val() +
    ";" +
    $("#login").val() +
    ";" +
    $("#pass").val();

  $.ajax({
    url: "/aproms/aproms.dll/login?" + cPar,
    dataType: "text",
    success: function (resposta) {
      $("#loaderLote").addClass("d-none");
      $("#loaderLote").removeClass("d-block");

      document.getElementById("login").disabled = false;
      var result = resposta.slice(0, 3);
      if (result == "SIM") {
        res = resposta.slice(3, resposta.length);
        window.location.href = "/aproms/aproms.dll/restrito?id=" + res;
      } else if (result == "ALT") {
        $("#altearaSenha").modal("show");
      } else if (result == "NAO") {
        alert("Usuário não existe");
      }
    },
  });
}

function loginForgot() {
  var ajax = ajaxInit();
  let email = $("#userOrEmail").val();
  let cnpj = $("#cnpjForgot").val();
  var cPar = "par=" + cnpj + ";" + email;
  var res = "N";
  var av = "N";

  if (ajax) {
    ajax.open("POST", "/aproms/aproms.dll/esqueci?" + cPar, true);

    ajax.onreadystatechange = function () {
      if (ajax.responseText.slice(0, 3) == "SIM" && av == "N") {
        av = "S";
        res = "S";
        document.querySelector(".textEmail").innerHTML =
          "Senha enviada no email:<br/>" +
          ajax.responseText.slice(3, ajax.responseText.length);
        alert("Senha enviada ao email: " + email);
      } else if (ajax.responseText.slice(0, 3) == "NAO" && av == "N") {
        av = "S";
        alert("Usuário não encontrado.");
      } else if (ajax.responseText.slice(0, 4) == "ERRO" && av == "N") {
        av = "S";
        alert("Erro ao tentar enviar a senha");
      }
    };
    ajax.send(null);
  }
}

function loadStates() {
  $.ajax({
    url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    dataType: "json",
    success: function (response) {
      let startState = $("#startState");
      let endState = $("#endState");
      let contentState = "<option selected>Selecione um estado</option>";

      response.forEach((uf) => {
        let value = "<option value='" + uf.sigla + "'>" + uf.nome + "</option>";
        contentState += value;
      });

      startState.html(contentState);
      endState.html(contentState);
    },
    error: function (response) {
      alert(response);
    },
  });
}

function chooseCity(idState, idCity) {
  let selectStates = $("#" + idState)[0];
  let selectCities = $("#" + idCity);
  let uf = selectStates.options[selectStates.selectedIndex].value;
  let contentCities = "<option selected>Selecione uma cidade</option>";

  $.ajax({
    url:
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
      uf +
      "/municipios",
    dataType: "json",
    success: function (response) {
      response.forEach((city) => {
        let value =
          "<option value='" + city.nome + "'>" + city.nome + "</option>";
        contentCities += value;
      });

      selectCities.html(contentCities);
    },
    error: function (response) {
      alert(response);
    },
  });
}

function configInputDoubt() {
  const inputDoubt = document.getElementById("doubt");
  if (inputDoubt) {
    inputDoubt.addEventListener("keyup", function (e) {
      var key = e.which || e.keyCode;
      if (key == 13) {
        searchAnwser();
      }
    });
  }
}

function verifyCookies() {
  const container = $("#cookies");
  //var UIDP = window.location.href.toString();

  if (!container) {
    return null;
  } else {
    if (getCookie('UID')) { // SE OS COOKIES JÁ TIVEREM SIDO ACEITOS
      container.show().fadeOut(); // ESCONDE A NOTIFICAÇÃO
    }
  }
}

function armazenarCookies() {      // ARMAZENAR COOKIES
  $("#cookies").show().fadeOut();
  let c_exists = getCookie('UID');
  if (c_exists === "") {
    setCookie('UID', 'Conexão realizada!');
    setCookie('NAV', 'navegador');
  }
}

function setCookie(c_name, c_value) {
  document.cookie = `${c_name}=${c_value}`;
}

function getCookie(c_name) {
  var name = c_name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function upCookie(c_name, c_value) {
  document.cookie = `${c_name}=${c_value}`;
}

function delCookie(c_name) {
  document.cookie = `${c_name}=;` + `expires= Thu, 021 Jan 1970 00:00:00 UTC;`;
}
