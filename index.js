const oList = document.getElementById("list");
var toDos = [];

function loader() {
  toDos = [...localStorage.data.split(",")];

  if (toDos !== 0) {
    toDos.forEach((dat) => {
      const li = document.createElement("li");
      li.setAttribute(
        "class",
        "col-sm-4 text-white rounded col p-2 border border-info my-3"
      );
      li.innerHTML = `${dat} `;
      oList.appendChild(li);
    });
  }
}

function handleClick() {
  const inp = document.getElementById("input").value;

  inp !== "" ? toDos.unshift(inp) : "";
  localStorage.setItem("data", toDos);
  //   toDos.forEach((dat) => {
  //     li.innerText = dat;
  //     oList.appendChild(li);
  //   });

  location.reload();
  document.getElementById("input").value = "";
}

function deleteLi() {
  localStorage.removeItem("data");
  location.reload();
}
