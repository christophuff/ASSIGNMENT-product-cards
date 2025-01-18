const availability = document.querySelector(".availability");
const overLay = document.querySelector(".overlay")

let imgStr=""


if (availability.textContent === "Not Available"){
  imgStr += `
  <img src="images/soldout.png" alt="">
  `;

  overLay.innerHTML += imgStr;
}
