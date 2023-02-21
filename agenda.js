var Agenda = class Agenda {
  constructor(agenda) {
    this.agenda = agenda;
    this.agendaContainer = this.agenda.querySelector(".agendamentos");

    this.dadosAgenda = {};
    this.listaTemas = {
      roxoEscuro: {
        "--cor-fundo": "#28243c",
        "--cor-principal-1": "#7949dd",
        "--cor-principal-2": "#b19ae4",
        "--cor-principal-3": "#8f06ff67",
        "--cor-texto": "white",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(13%) sepia(25%) saturate(864%) hue-rotate(210deg) brightness(96%) contrast(96%)",
      },
      roxoClaro: {
        "--cor-fundo": "#ececec",
        "--cor-principal-1": "#7949dd",
        "--cor-principal-2": "#b19ae4",
        "--cor-principal-3": "#8f06ff67",
        "--cor-texto": "black",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(92%) sepia(56%) saturate(12%) hue-rotate(220deg) brightness(118%) contrast(85%)",
      },
      amareloEscuro: {
        "--cor-fundo": "#0d1017",
        "--cor-principal-1": "#d4993a",
        "--cor-principal-2": "#d4b684",
        "--cor-principal-3": "#49424e67",
        "--cor-texto": "white",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(4%) sepia(6%) saturate(4849%) hue-rotate(184deg) brightness(96%) contrast(94%)",
      },
      amareloClaro: {
        "--cor-fundo": "#ececec",
        "--cor-principal-1": "#d4993a",
        "--cor-principal-2": "#d4b684",
        "--cor-principal-3": "#49424e67",
        "--cor-texto": "black",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(92%) sepia(56%) saturate(12%) hue-rotate(220deg) brightness(118%) contrast(85%)",
      },
      vermelhoEscuro: {
        "--cor-fundo": "#130d17",
        "--cor-principal-1": "#990011FF",
        "--cor-principal-2": "#D54754",
        "--cor-principal-3": "#FF809B",
        "--cor-texto": "white",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(4%) sepia(4%) saturate(7275%) hue-rotate(232deg) brightness(95%) contrast(95%)",
      },
      vermelhoClaro: {
        "--cor-fundo": "#ececec",
        "--cor-principal-1": "#990011FF",
        "--cor-principal-2": "#D54754",
        "--cor-principal-3": "#FF809B",
        "--cor-texto": "black",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(92%) sepia(56%) saturate(12%) hue-rotate(220deg) brightness(118%) contrast(85%)",
      },
      rosaEscuro: {
        "--cor-fundo": "#B7819B",
        "--cor-principal-1": "#FF8DC7",
        "--cor-principal-2": "#FFACC7",
        "--cor-principal-3": "#FFDDD2",
        "--cor-texto": "white",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(62%) sepia(8%) saturate(1417%) hue-rotate(279deg) brightness(90%) contrast(80%)",
      },
      rosaClaro: {
        "--cor-fundo": "#ececec",
        "--cor-principal-1": "#FF8DC7",
        "--cor-principal-2": "#FFACC7",
        "--cor-principal-3": "#FFDDD2",
        "--cor-texto": "black",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(92%) sepia(56%) saturate(12%) hue-rotate(220deg) brightness(118%) contrast(85%)",
      },
      azulEscuro: {
        "--cor-fundo": "#404756",
        "--cor-principal-1": "#8AAAE5",
        "--cor-principal-2": "#b2c7ec",
        "--cor-principal-3": "#cbd6e7",
        "--cor-texto": "white",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(25%) sepia(4%) saturate(2396%) hue-rotate(183deg) brightness(99%) contrast(88%)",
      },
      azulClaro: {
        "--cor-fundo": "#ececec",
        "--cor-principal-1": "#8AAAE5",
        "--cor-principal-2": "#b2c7ec",
        "--cor-principal-3": "#cbd6e7",
        "--cor-texto": "black",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(92%) sepia(56%) saturate(12%) hue-rotate(220deg) brightness(118%) contrast(85%)",
      },
      verdeEscuro: {
        "--cor-fundo": "#3B4A3F",
        "--cor-principal-1": "#2BAE66FF",
        "--cor-principal-2": "#8bdbaf",
        "--cor-principal-3": "#aee2c6",
        "--cor-texto": "white",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(26%) sepia(12%) saturate(610%) hue-rotate(83deg) brightness(97%) contrast(92%)",
      },
      verdeClaro: {
        "--cor-fundo": "#ececec",
        "--cor-principal-1": "#2BAE66FF",
        "--cor-principal-2": "#8bdbaf",
        "--cor-principal-3": "#aee2c6",
        "--cor-texto": "black",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(92%) sepia(56%) saturate(12%) hue-rotate(220deg) brightness(118%) contrast(85%)",
      },
      retroEscuro: {
        "--cor-fundo": "#6F5643",
        "--cor-principal-1": "#cc6b49",
        "--cor-principal-2": "#d2a24c",
        "--cor-principal-3": "#73bda8",
        "--cor-texto": "white",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(32%) sepia(38%) saturate(378%) hue-rotate(343deg) brightness(97%) contrast(89%)",
      },
      retroClaro: {
        "--cor-fundo": "#ece6c2",
        "--cor-principal-1": "#cc6b49",
        "--cor-principal-2": "#d2a24c",
        "--cor-principal-3": "#73bda8",
        "--cor-texto": "black",
        "--cor-texto-botoes": "white",
        "--cor-texto-container": "black",
        "--cor-container": "white",
        "--cor-filtro":
          "invert(94%) sepia(9%) saturate(605%) hue-rotate(8deg) brightness(97%) contrast(95%)",
      },
    };
  }

  carregarDados(tema = "roxoEscuro") {
    if (window.localStorage.length == 0) {
      localStorage.setItem("MIGLIORELLI@agenda", `{tema: "${tema}"}`);
      this.definirDados({ tema: tema });
      return;
    }

    let Dados = JSON.parse(localStorage.getItem("MIGLIORELLI@agenda"));
    if (Dados == null) throw "não tem dado";

    for (let item in Dados) {
      if (item === "tema") continue;

      let checado = Object.keys(Dados[[item]])[1];
      if (!(checado in Dados[item])) {
        Dados[item]["checado"] = false;
      }
    }

    this.definirDados(Dados);
  }

  definirDados(dados) {
    if (!dados) throw "Não tem dado suficiente nessa porra :D";
    this.dadosAgenda = dados;
  }

  iniciarAgenda() {
    const temDados = Object.keys(this.dadosAgenda).length > 0;
    if (!temDados) { return 
    } else {
      for (let titulo in this.dadosAgenda) {
        let item = this.dadosAgenda[titulo];
        if (titulo == "tema") {
          this.mudarTema(item);
          continue;
        }

        let anotacao = item["anotacao"],
        data = item["data"],
        hora = item["hora"],
        checado = item["checado"];

        this.#incorporarItem(
          String(titulo),
          String(anotacao),
          String(data),
          String(hora),
          Boolean(checado)
        );
      }
    }
  }

  #incorporarItem(titulo, anotacao, data, hora, checado) {
    let novaDiv = document.createElement("div"),
      [anoDiv, mesDiv, diaDiv] = data.split("-"),
      dataDiv = `${diaDiv}/${mesDiv}/${anoDiv}`,
      anotacaoDiv =
        anotacao === "" ? "" : `<div class="anotacao-div">${anotacao}</div>`,
      horaDiv = hora === "" ? "" : hora + ", ",
      taChecado = checado === true ? "checked" : "";

    if (checado) novaDiv.classList.toggle("checado");

    novaDiv.classList.add("item-background");
    novaDiv.setAttribute("id", titulo.replace(/\s/g, ""));

    novaDiv.innerHTML = `   
    <div class="agenda-item-titulo">
      <h3>${titulo}</h3>
    </div>
    <div class="agenda-item-descricao">
      ${anotacaoDiv}
      <span>${horaDiv}${dataDiv}</span>
    </div>
    <div class="botao-remover">
      <button onclick="agenda.removerItem(this.value)" value="${titulo}">Remover</button>
    </div>
    <div class="checkbox" >
      <label class="checkbox-label">
        <input type="checkbox" onchange="agenda.armazenarCheck(this)" value="${titulo}" ${taChecado}>
        <span class="checkmark"></span>
      </label>
    </div>
    `;

    this.agendaContainer.append(novaDiv);
  }

  adicionarItem(titulo, anotacoes = "", data, hora = "") {
    this.dadosAgenda[titulo] = {
      anotacao: anotacoes,
      data: data,
      hora: hora,
      checado: false,
    };
    this.#incorporarItem(titulo, anotacoes, data, hora, false);

    this.atualizarDados();
  }

  itemExiste(tituloItem) {
    return tituloItem in this.dadosAgenda;
  }

  removerItem(item) {
    for (let titulo in this.dadosAgenda) {
      if (String(titulo) == String(item)) delete this.dadosAgenda[titulo];
    }

    this.agendaContainer.innerHTML = "";
    this.atualizarDados();
    this.iniciarAgenda();
  }

  armazenarCheck(checkbox) {
    for (let titulo in this.dadosAgenda)
      if (String(checkbox.value) === String(titulo)) {
        let stripTitulo = titulo.replace(/\s/g, ""),
          div = this.agendaContainer.querySelector(`div#${stripTitulo}`);

        if (checkbox.checked) {
          this.dadosAgenda[titulo]["checado"] = true;
          div.classList.add("checado");
        } else {
          this.dadosAgenda[titulo]["checado"] = false;
          div.classList.remove("checado");
        }
      }
    this.atualizarDados();
  }

  atualizarDados() {
    const stringDados = JSON.stringify(this.dadosAgenda);

    localStorage.setItem("MIGLIORELLI@agenda", stringDados);
  }

  limparDados() {
    const temaAtual = this.dadosAgenda["tema"];
    localStorage.clear();
    this.agendaContainer.innerHTML = "";

    this.carregarDados(temaAtual);
    this.atualizarDados();
    this.iniciarAgenda();
  }

  mudarTema(tema = null) {
    let root = document.querySelector(":root"),
      temas = this.listaTemas;

    if (tema) {
      let temaIndex = Object.keys(temas).indexOf(tema),
        temaNome = Object.keys(temas)[temaIndex],
        colocarTema = temas[temaNome];

      for (let cor in colocarTema)
        root.style.setProperty(cor, colocarTema[cor]);

      this.dadosAgenda["tema"] = tema;
      this.atualizarDados();
      return;
    }

    let temaAtual = String(this.dadosAgenda["tema"]),
      temaAtualIndex = Object.keys(temas).indexOf(temaAtual),
      proximoTemaIndex =
        temaAtualIndex + 1 > Object.keys(temas).length - 1
          ? 0
          : temaAtualIndex + 1,
      proximoTemaNome = Object.keys(temas)[proximoTemaIndex],
      proximoTema = temas[proximoTemaNome];

    this.dadosAgenda["tema"] = proximoTemaNome;

    for (let cor in proximoTema) root.style.setProperty(cor, proximoTema[cor]);

    this.dadosAgenda["tema"] = proximoTemaNome;

    this.atualizarDados();
  }

  copiarDados(e){
    let dadosAtuais = localStorage.getItem("MIGLIORELLI@agenda")
    navigator.clipboard.writeText(dadosAtuais)

    e.innerHTML = "Dados copiados"
  }

  fazerBackup(e){
    e.innerHTML = "Backup feito"
    this.limparDados()

    let textField = document.querySelector(".novos-dados-txt")
    let novosDados = textField.value

    textField.value = ""
    localStorage.setItem("MIGLIORELLI@agenda", novosDados)
    
    this.carregarDados()
    this.iniciarAgenda()
    this.atualizarDados()
  }
};
