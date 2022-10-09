const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //웹사이트를 켰을 때 바로 시간을 표현하게끔 하려고. 이걸 안해주면 1초 뒤에 표현됨
setInterval(getClock, 1000);