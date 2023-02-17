import "../styles/style.css";
import { menu } from "./menu";
import { DOMSelectors } from "./DOM";

menu.forEach((el) => {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
        <div class="inner">
        <h1>${el.name}</h1>
        <img class="imgheight" src="${el.img}" alt="add image">        
        <h2 class=cals>Calories: ${el.calories}</h2>
        <h3 class=cost>Price: ${el.cost}</h2>
        <button class=add> Add To Cart </button>
        </div>`
  );
});

const remove = function () {
  document.querySelectorAll(".inner").forEach((e) => e.remove());
};

const options = {
  getAll: function () {
    document.getElementById("menuall").addEventListener("click", function () {
      remove();
      menu.forEach((el) => {
        console.log(el.name);
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
          <div class="inner">
          <h1>${el.name}</h1>
          <img class="imgheight" src="${el.img}" alt="add image">        
          <h2 class=cals>Calories: ${el.calories}</h2>
          <h3 class=cost>Price: ${el.cost}</h2>
          <button class=add> Add To Cart </button>
        </div>`
        );
      });
    });
  },

  getBurger: function () {
    document.getElementById("burger").addEventListener("click", function () {
      remove();
      menu
        .filter((el) => el.section.includes("burger"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="inner">
          <h1>${el.name}</h1>
          <img class="imgheight" src="${el.img}" alt="add image">        
          <h2 class=cals>Calories: ${el.calories}</h2>
          <h3 class=cost>Price: ${el.cost}</h2>
          <button class=add> Add To Cart </button>
          </div>`
          );
        });
    });
  },
  getFries: function () {
    document.getElementById("fries").addEventListener("click", function () {
      remove();
      menu
        .filter((el) => el.section.includes("fries"))
        .forEach((el) => {
          console.log(el.name);
          DOMSelectors.box.insertAdjacentHTML(
            "beforeend",
            `
          <div class="inner">
          <h1>${el.name}</h1>
          <img class="imgheight" src="${el.img}" alt="add image">        
          <h2 class=cals>Calories: ${el.calories}</h2>
          <h3 class=cost>Price: ${el.cost}</h2>
          <button class=add> Add To Cart </button>
          </div>`
          );
        });
    });
  },
  getVeg: function () {
    document
      .getElementById("vegetarian")
      .addEventListener("click", function () {
        remove();
        menu
          .filter((el) => el.vegetarian.includes("yes"))
          .forEach((el) => {
            console.log(el.name);
            DOMSelectors.box.insertAdjacentHTML(
              "beforeend",
              `
          <div class="inner">
          <h1>${el.name}</h1>
          <img class="imgheight" src="${el.img}" alt="add image">        
          <h2 class=cals>Calories: ${el.calories}</h2>
          <h3 class=cost>Price: ${el.cost}</h2>
          <button class=add> Add To Cart </button>
          </div>`
            );
          });
      });
  },
};
options.getAll();
options.getBurger();
options.getFries();
options.getVeg();
