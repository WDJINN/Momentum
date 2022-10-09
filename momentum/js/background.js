const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg"
];

const ChosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./img/${ChosenImage}`;

const wrap = document.querySelector('.wrap')

wrap.appendChild(bgImage);


