function returnHome() {
  window.location.href = "index.html";
}

function goToDungeon() {
  window.location.href = "rungeon.html";
}

function toScreenTwo() {
  document.title = "Room Two";
  document.getElementById("screenOne").style.display = "none";
  document.getElementById("screenTwo").style.display = "block";
}

function toScreenThree() {
  document.title = "Room Three";
  document.getElementById("screenTwo").style.display = "none";
  document.getElementById("screenThree").style.display = "block";
}

function toScreenFour() {
  document.title = "Room Four";
  document.getElementById("screenThree").style.display = "none";
  document.getElementById("screenFour").style.display = "block";
}

function toScreenFive() {
  document.title = "Room Five";
  document.getElementById("screenFour").style.display = "none";
  document.getElementById("screenFive").style.display = "block";
}

function takeCoin() {
  document.getElementById("key").style.display = "none";
  foo();
}

let hasCoin;
function foo() {
  hasCoin = true;
  return hasCoin;
}

clickCount = 0;
opacityVal = 1;
function squashBug() {
  clickCount++;
  opacityVal -= 0.4;
  document.getElementById("bugIcon").style.opacity = opacityVal;
  if (clickCount == 3) {
    document.getElementById("bugButton").disabled = false;
    document.getElementById("bugButton").style.opacity = "1";
  }
}

function checkForKey() {
  if (hasCoin) {
    document.querySelector(".screenFour .icon").style.cursor =
      "url('https://cdn.discordapp.com/attachments/961138819111993354/993103064192004226/Untitled_1.png'), auto";
    document.getElementById("screenFourButton").disabled = false;
    document.getElementById("screenFourButton").style.opacity = "1";
  } else {
    document.querySelector(".screenFour .icon").style.cursor = "not-allowed";
  }
}
