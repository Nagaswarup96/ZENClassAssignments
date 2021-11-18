const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");

val1.innerText = Math.floor(Math.random() * 49) + 1;
val2.innerText = Math.floor(Math.random() * 49) + 1;

const handleClick = () => {
  const val = document.getElementById("sum").value;
  let sum = parseInt(val1.innerText) + parseInt(val2.innerText);
  if (parseInt(val) === sum) {
    alert("SUCCESS");
  } else {
    alert(`sorry, Wrong Answer. Correct Answer is ${sum}`);
  }
};
