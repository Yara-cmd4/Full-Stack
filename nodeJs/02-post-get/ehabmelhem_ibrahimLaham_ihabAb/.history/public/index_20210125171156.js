let add = document.getElementById("add");
let input = document.getElementById("input");
let root = document.getElementById("root");
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = input.value;
    img.width = "200";
    let span = document.createElement("span");
    let span = document.createElement("span");
    let span = document.createElement("span");
    let span = document.createElement("span");
    let span = document.createElement("span");

    console.log(img);

    root.appendChild(img);
  }
});
