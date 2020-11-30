const posts = document.querySelector(".posts__list").querySelectorAll("li")
const filterButtons = document.querySelectorAll(".filter-button")

const filterButtonsList = [...filterButtons]
const postsList = [...posts]

filterButtonsList.forEach(button => {
  button.addEventListener("click", event => {
    button.classList.add("active")
    postsList.forEach(post => {
      const category = event.target.innerText.replace(" ","-")
      if (category === "Todos") {
        post.classList.remove("hide")
      }
      else if (!post.classList.contains(category)) {
        post.classList.add("hide")
      } else {
        post.classList.remove("hide")
      }
    })

    filterButtonsList.map(button => {
      if (button != event.target) {
        button.classList.remove("active")
      }
    })
  })
})