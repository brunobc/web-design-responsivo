document.querySelector('.menu-abrir').onclick = function() {
  document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function() {
  console.log('tes');
  document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = function(event) {
  if (event.target === document.documentElement) {
    document.documentElement.classList.remove('menu-ativo');
  }
}
