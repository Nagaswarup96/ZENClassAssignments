let value = 0;

function loader() {
  value = Math.floor(Math.random() * 99) + 1;
}
let count = 1;
function handleClick() {
  const val = document.getElementById("num").value;
  if (parseInt(val) === value) {
    alert(`Congratulations 🎉✨, you have guessed in ${count} attempts`);
    document.getElementById("num").value = "";
    loader();
  } else if (parseInt(val) > value) {
    alert(`Sorry, Enter some smaller value`);
    count += 1;
    document.getElementById("num").value = "";
  } else if (parseInt(val) < value) {
    alert(`Sorry, Enter some bigger value`);
    count += 1;
    document.getElementById("num").value = "";
  } else if (parseInt(val) !== Number) {
    alert(`Please enter only integers`);
    document.getElementById("num").value = "";
  }
}
