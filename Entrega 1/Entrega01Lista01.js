const btnCurriculo = document.querySelector('a.btn');

btnCurriculo.addEventListener('click', () => {
    // Muda o texto e a cor de fundo ao clicar
    btnCurriculo.innerText = 'Baixando...';
    btnCurriculo.style.backgroundColor = '#28a745'; // verde

    // Volta ao normal após 3 segundos
    setTimeout(() => {
        btnCurriculo.innerText = 'Baixar Currículo';
        btnCurriculo.style.backgroundColor = '#0066cc'; // azul padrão
    }, 3000);
});