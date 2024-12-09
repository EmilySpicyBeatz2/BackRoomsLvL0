var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "images/3.png",
  "images/7.png",
  "images/cipher.png",
  "images/cipherFixed.png",
  "images/clickerNote.png",
  "images/clickerNoteICO.ico",
  "images/crumple.png",
  "images/deCipher.png",
  "images/door.png",
  "images/eight.png",
  "images/EXIT.png",
  "images/gone.png",
  "images/head.png",
  "images/IntroText.png",
  "images/key.png",
  "images/LVL0.jpg",
  "images/Mode1.png",
  "images/Rom2.jpg",
  "images/Room3.png",
  "images/Room4.png",
  "images/scaryArrow.png",
  "images/smiler.jpg",
  "images/submit.png",
  "images/wideDoor.png",
  "audio/BackroomsAmbi1min.mp3",
  "audio/Collect.mp3",
  "audio/UnlockDoorSE.mp3",
  "audio/Scream.mp3",
  "audio/FinalScream.mp3",
  "audio/wompwomp.mp3"
);
