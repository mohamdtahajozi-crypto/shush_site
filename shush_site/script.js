const voice = document.getElementById('voice');
const shushSound = document.getElementById('shushSound');
const btn = document.getElementById('shushBtn');
const hand = document.getElementById('hand');

// browsers block autoplay: start voice after first user click
document.addEventListener('click', () => {
  if (voice.paused) voice.play().catch(()=>{});
}, { once: true });

function startShush() {
  voice.pause();
  shushSound.currentTime = 0;
  shushSound.play();
  hand.style.display = 'block';
}

function stopShush() {
  shushSound.pause();
  voice.play();
  hand.style.display = 'none';
}

// Desktop
btn.addEventListener('mousedown', startShush);
btn.addEventListener('mouseup', stopShush);
btn.addEventListener('mouseleave', stopShush);

// Mobile
btn.addEventListener('touchstart', e => { e.preventDefault(); startShush(); });
btn.addEventListener('touchend', stopShush);
