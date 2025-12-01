export default function playAudio() {
  const audio = new Audio("/sounds/hover-audio.wav");
  audio.volume = 0.15;
  audio.play();
}