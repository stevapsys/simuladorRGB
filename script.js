window.addEventListener('load', start);

function start() {
  console.log('olá');
  valor();
}

function valor() {
  var vermelho = document.getElementById('red').value;
  var verde = document.getElementById('green').value;
  var azul = document.getElementById('blue').value;
  var cor = 'rgb(' + vermelho + ',' + verde + ',' + azul + ')';
  var novaCor = document.getElementById('cor');

  document.getElementById('valorRed').value = vermelho;
  document.getElementById('valorGreen').value = verde;
  document.getElementById('valorBlue').value = azul;
  novaCor.style.backgroundColor = cor;
}
