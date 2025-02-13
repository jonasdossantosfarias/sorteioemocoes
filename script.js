function mostrarEmocao() {
    const nome = document.getElementById("nomeInput").value.toUpperCase();
    let emocao = "";
    let emoji = "";
  
    switch (nome) {
      case "IASMIN":
        emocao = "Alegria";
        emoji = "😊";
        break;
      case "VANESSA":
        emocao = "Tristeza";
        emoji = "😢";
        break;
        case "JHONI":
        emocao = "Tristeza";
        emoji = "😢";
        break;
      case "ELO":
        emocao = "Raiva";
        emoji = "😠";
        break;
      case "ROSEANE":
        emocao = "Nojo";
        emoji = "🤢";
        break;
        case "LEANDRO":
        emocao = "Medo";
        emoji = "😨";
        break;
      case "KARINA":
        emocao = "Medo";
        emoji = "😨";
        break;
      default:
        emocao = "Desconhecida";
        emoji = "❓";
    }
  
    // Abre uma nova página com o resultado
    abrirPaginaResultado(nome, emocao, emoji);
  }
  
  function abrirPaginaResultado(nome, emocao, emoji) {
    // Use window.location.href para redirecionar com parâmetros na URL
    window.location.href = `resultado.html?nome=${encodeURIComponent(nome)}&emocao=${encodeURIComponent(emocao)}&emoji=${encodeURIComponent(emoji)}`;
  }