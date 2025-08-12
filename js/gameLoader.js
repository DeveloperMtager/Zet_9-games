// Скрипт для динамической подгрузки игр, переключения между ними и т.п.

const gameFrame = document.getElementById('gameFrame');

function loadGame(path) {
  if (gameFrame) {
    gameFrame.src = path;
    console.log(`Загружаем игру: ${path}`);
  }
}

// Пример переключения игры (можно сделать меню позже)
window.loadGame = loadGame; // чтобы можно было вызвать из консоли
