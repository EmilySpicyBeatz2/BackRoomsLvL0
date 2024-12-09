let clickCount = 0;
var input_div = document.getElementById("myText");

function changeHtml1() {
  window.location.href = "1.html";
}

function changeHtml2() {
  window.location.href = "2.html";
}

function Finale() {
  window.location.href = "https://52wyt8.csb.app/";
}

function keyGone() {
  document.getElementById("key").src = "";
  document.getElementById("getItem").play();
}

function checkInput() {
  console.log(input_div.value);
  if (input_div.value == "PAST THE MONSTER") {
    console.log("CORRECT");
    monsterGone();
  } else {
    console.log("...try again");
    document.getElementById("wompwomp").play();
  }
  input_div.value = "";
}

function monsterGone() {
  console.log("reveal 8");
  AHH();
  setTimeout(GHH, 3500);
  document.getElementById("smile").src = "images/eight.png";
  setTimeout(Finale, 5000);
}

function lockSoundEffect() {
  document.getElementById("LockSE").play();
}

function click2door() {
  clickCount++;

  if (clickCount % 2 === 1) {
    lockSoundEffect();
    console.log("1");
  } else clickCount % 2 === 2;
  {
    changeHtml2();
    console.log("2");
  }
}

function AHH() {
  document.getElementById("bodIdity").classList.add("jumpscare");
  document.getElementById("rawr").play();
}

function GHH() {
  document.getElementById("bodIdity").classList.remove("jumpscare");
}

function No3() {
  document.getElementById("thwee").src = "";
}

function No7() {
  document.getElementById("sweven").src = "";
}

function firstShowModel() {
  console.log("modalRAHHH");
  document.getElementById("mode1").style.display = "flex";
}

function firstHideModel() {
  console.log("modalGONEEE");
  document.getElementById("mode1").style.display = "none";
}

function secondShowModel() {
  console.log("modalARGHHH");
  document.getElementById("moda2").style.display = "flex";
}

function secondHideModel() {
  console.log("moda2GONEEE");
  document.getElementById("moda2").style.display = "none";
}

function hideIntroModal() {
  document.getElementById("modalGif").style.display = "none";
}

setTimeout(hideIntroModal, 10000);
