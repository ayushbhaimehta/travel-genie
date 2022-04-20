const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});
document.querySelector(".nav-list").addEventListener("click", () => {
  container.classList.remove("change");
})

// // Slideshow
// const slideshowDivs = () => {
//   for(let i = 1; i <= 5; i++) {
//       const div = document.createElement('div')

//       div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

//       i === 1 && div.classList.add('change')

//       document.querySelector('.slideshow').appendChild(div)
//   }
// }
// document.querySelector("footer-list").addEventListener("click", () => {
//   app.get("/home.ejs", function(req, res){
//     res.render("/");
//   });
// })


const colors = ["#006778", "#39AEA9", "#AFEEEE", "#A2D5AB", "#42C2FF"];


let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
