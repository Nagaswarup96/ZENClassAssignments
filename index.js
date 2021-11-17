const handleClick = () => {
  const val = document.getElementById("inpVal").value;
  document.getElementById("total").innerText = val.length;
  document.getElementById("total").style.display = "block";
};
