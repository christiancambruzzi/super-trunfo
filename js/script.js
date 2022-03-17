var carta1 = {
  nome: 'Sulley',
  codigo: '001',
  tipo: 'bear',
  imagem: 'img/sulley.png',
  bg: '#82bab2',
  atributos: {
    susto: 1000,
    riso: 300,
    ataque: 800,
    defesa: 600,
    velocidade: 400
  }
}

var carta2 = {
  nome: 'Mike',
  codigo: '002',
  tipo: 'green',
  imagem: 'img/mike.png',
  bg: '#c7cc4d',
  atributos: {
    susto: 200,
    riso: 1000,
    ataque: 200,
    defesa: 500,
    velocidade: 600
  }
}

var carta3 = {
  nome: 'Boo',
  codigo: '003',
  tipo: 'human',
  imagem: 'img/boo.png',
  bg: '#d8abd4',
  atributos: {
    susto: 200,
    riso: 800,
    ataque: 200,
    defesa: 300,
    velocidade: 400
  }
}

var carta4 = {
  nome: 'Randall',
  codigo: '004',
  tipo: 'lizard',
  imagem: 'img/randall.png',
  bg: '#bbaac1',
  atributos: {
    susto: 900,
    riso: 100,
    ataque: 700,
    defesa: 900,
    velocidade: 800
  }
}

var carta5 = {
  nome: 'Roz',
  codigo: '005',
  tipo: 'snail',
  imagem: 'img/roz.png',
  bg: '#ede4a1',
  atributos: {
    susto: 800,
    riso: 100,
    ataque: 100,
    defesa: 200,
    velocidade: 100
  }
}

var carta6 = {
  nome: 'Bile',
  codigo: '006',
  tipo: 'dinosaur',
  imagem: 'img/bile.png',
  bg: '#9db8c7',
  atributos: {
    susto: 400,
    riso: 800,
    ataque: 200,
    defesa: 300,
    velocidade: 500
  }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaJogador = parseInt(Math.random() * 6)
  cartaJogador = cartas[numeroCartaJogador]

  var numeroCartaMaquina = parseInt(Math.random() * 6)
  cartaMaquina = cartas[numeroCartaMaquina]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  //   exibirOpcoes()
  exibirCartaJogador()
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById('opcoes')
//   var opcoesTexto = ''

//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'> <strong>Susto:</strong>${atributo}`
//   }
// }

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById('resultado')

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = `<p class="resultado">Isso aí humano! Você conseguiu!</p>`
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = `<p class="resultado">Perdeu!
    Cuidado!<br> O bicho pega e não solta mais!</p>`
  } else {
    htmlResultado = `<p class='resultado'>Empatou! Você e eu somos um time!</p>`
  }

  divResultado.innerHTML = htmlResultado

  document.getElementById('btnJogar').disabled = true

  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById('carta-jogador')

  var opcoesTexto = ``
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<li class='radio'><input type='radio' name='atributo' value='${atributo}'> <strong>${atributo}:</strong> ${cartaJogador.atributos[atributo]}</li>`
  }

  divCartaJogador.innerHTML = `<div class="card-top" style="background-color: ${cartaJogador.bg}">
    <div class="details">
      <h2 class="name">${cartaJogador.nome}</h2>
      <span>${cartaJogador.codigo}</span>
    </div>
    <span class="type">${cartaJogador.tipo}</span>
    <div class="image-card">
      <img src="${cartaJogador.imagem}"/>
    </div>
  </div>
  <div class="card-info">
    <div class="status">
      <ul id="opcoes">
        ${opcoesTexto}
      </ul>
    </div>
  </div>`
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById('carta-maquina')

  var opcoesTexto = ``
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `<li name='atributo' value='${atributo}'> <strong>${atributo}:</strong> ${cartaMaquina.atributos[atributo]}</li>`
  }

  divCartaMaquina.innerHTML = `<div class="card-top" style="background-color: ${cartaMaquina.bg}">
      <div class="details">
        <h2 class="name">${cartaMaquina.nome}</h2>
        <span>${cartaMaquina.codigo}</span>
      </div>
      <span class="type">${cartaMaquina.tipo}</span>
      <div class="image-card">
        <img src="${cartaMaquina.imagem}"/>
      </div>
    </div>
    <div class="card-info">
      <div class="status">
        <ul id="opcoes">
          ${opcoesTexto}
        </ul>
      </div>
    </div>`
}
