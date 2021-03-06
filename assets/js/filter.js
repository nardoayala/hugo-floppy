const posts = document.querySelectorAll(".post");
const filterButtons = document.querySelectorAll(".filter-button");

const filterButtonsList = [...filterButtons];
const postsList = [...posts];

function urlize(string) {
  return ((string.replace(" ","-")).toLowerCase());
}

function filter(button) {
  filterButtonsList.forEach((button) => button.classList.remove("active"));
  button.classList.add("active");

  const category = urlize(button.innerText);
  postsList.forEach((post) => {
    if (category === "todos") {
      post.classList.remove("hide");
    } else if (!post.classList.contains(category)) {
      post.classList.add("hide");
    } else {
      post.classList.remove("hide");
    };
  });
};