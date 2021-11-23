const btn = document.querySelector("#btn");
const h1 = document.getElementById("author");
const url = "https://breakingbadapi.com/api/quote/random";

const data = async () => {
  try {
    const response = await fetch(url);
    const values = await response.json();
    h1.innerText = values[0].author;
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", data);
