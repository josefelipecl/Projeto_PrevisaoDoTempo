const apiKey = '30aff07a3e1f0b62d6c93dd954eb2d7e'; //não ativada ainda -verificado em 23/06 18:40

// Função para obter a previsão do tempo
function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo,BR&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { name, weather, main } = data;
      const { description } = weather[0];
      const { temp, humidity } = main;

      const weatherDiv = document.getElementById('weather');
      weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p>Descrição: ${description}</p>
        <p>Temperatura: ${temp}°C</p>
        <p>Umidade: ${humidity}%</p>
      `;
    })
    .catch(error => {
      console.log('Ocorreu um erro:', error);
    });
}

// Chamada da função ao carregar a página
window.addEventListener('load', getWeather);
