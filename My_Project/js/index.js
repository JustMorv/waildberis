

document.addEventListener("DOMContentLoaded", () => {

  new Swiper(".swiper-container", {
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        autoplay:{
          display: 1,
          loopAdditionalSlides: 30,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

      });


      const header =  document.querySelector(".header"),
            headerFixed = document.querySelector(".headerFixed"),
            headerLogo = document.querySelector(".header__logo_conteiner");



      window.addEventListener("scroll",headerScroll)

      function headerScroll (){
        if(window.pageYOffset > headerFixed + 90){
          header.classList.add("headerFixed")
          headerLogo.style.display = "none"
        }else{
          header.classList.remove("headerFixed")
          headerLogo.style.display = "block"
        }
      }


      const list = document.querySelector(".menu__box")

      list.addEventListener("click",(event)=>{
        if(event.target.className === "v-1"){
          header.style.background = "linear-gradient(81deg, #ddb35f, #7409c7)";
        }
        else if(event.target.className === "v-2"){
          header.style.background = "linear-gradient(to top right, red, blue)";
        }
        else if(event.target.className === "v-3"){
          header.style.background = "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)"
        }
        else if(event.target.className === "v-4"){
          header.style.background = "linear-gradient(rgba(135, 60, 255, 0.4), rgba(135, 60, 255, 0.0) 80%),linear-gradient(-45deg, rgba(120, 155, 255, 0.9) 25%, rgba(255, 160, 65, 0.9) 75%)";
        }
        else if(event.target.className === "v-5"){
          header.style.background = "linear-gradient(to right, #240b36, #c31432)";
        }
        else if(event.target.className === "v-6"){
          header.style.background = "linear-gradient(to right, #654ea3, #eaafc8)";
        }
        else if(event.target.className === "v-7"){
          header.style.background = "linear-gradient(to right, #5D26C1, #a17fe0, #59C173)";
        }
        else if(event.target.className === "v-8"){
          header.style.background = "linear-gradient(to right, #3c1053, #ad5389)";
        }
        else if(event.target.className === "v-9"){
          header.style.background = "linear-gradient(to right, #3f2b96, #a8c0ff)";
        }
        else if(event.target.className === "v-10"){
          header.style.background = "linear-gradient(to right, #8f94fb, #4e54c8)";
        }
        else if(event.target.className === "v-11"){
          header.style.background = "linear-gradient(to right, #6A82FB, #FC5C7D)";
        }
      })


    // linksCardCLICK

//     const navigationLink = document.querySelectorAll(".navigation_item")
//     const productsCardContainer = document.querySelector(".cardrender")

//     const getCard = async () => {
//         const result = await fetch("db/db.json")
//         if (!result.ok) {
//             throw "it doesn't work" + result.status
//         }
//         return await result.json()
//     }

  //   const cteareCard = (optionCArd) => {
  //       const card = document.createElement("div")
  //       card.className = "productsCard"
  //       card.innerHTML = `
  //   <div class="product__container">
  //       <div class="container__card_product">
  //           <h2 class="product__name">${optionCArd.title}</h2>
  //           <a class="product__buy js-modal-open" href="#modal-1">купить</a>
  //           <a href="#modal-2" class="product__info js-modal-open">Подробно</a>
  //           <div class="product__circle"></div>
  //           <div class="product__Price0nlyModal" style="display: none;">${optionCArd.price}</div>
  //           <img class="product__img" src="${optionCArd.img}" alt="">
  //       </div>
  // </div>`
//         return card

//     }

//     const renderCartClick = (data) => {
//         productsCardContainer.textContent = ""
//         const cards = data.map(cteareCard)
//         productsCardContainer.append(...cards)

//         document.body.classList.add("show-goods")
//         cardt3D()

//     }


//     // getCard().then(renderCartClick)


//     // filter
//     const filterCards = (field, value) => {
//         getCard()
//             .then((data) => {
//                 const filteredCard = data.filter((card) => {
//                     return card[field] === value
//                 })
//                 return filteredCard
//             })
//             .then(renderCartClick)
//     }

//     // вывод по клику етих, как их там... карточек! 

//     navigationLink.forEach((item) => {
//         productsCardContainer.style.animation = ""
//         item.addEventListener("click", (event) => {
//             event.preventDefault()
//             const field = item.dataset.field
//             const value = item.textContent
//             filterCards(field, value)
//             productsCardContainer.style.animation = "fade 1.5s"

//         })
//     })



})
