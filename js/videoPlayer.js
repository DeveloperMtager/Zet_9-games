// Управление видео, если нужно (например, автозапуск, пауза, события)
const promoVideo = document.getElementById('promoVideo');

if (promoVideo) {
  // Пример: автоматически поставить видео на паузу через 10 секунд
  promoVideo.addEventListener('play', () => {
    setTimeout(() => {
      promoVideo.pause();
      console.log('Видео поставлено на паузу через 10 секунд');
    }, 10000);
  });
}
