const imgArray = [
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
];
const container = document.querySelector("#container");

const createImageCard = (img) => {
  const card = document.createElement("div");
  card.classList.add("imgCard");
  const cardImg = new Image();
  cardImg.src = "./assets/" + img;
  card.appendChild(cardImg);
  return card;
};

imgArray.map((img) => container.appendChild(createImageCard(img)));
