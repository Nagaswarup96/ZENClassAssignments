function handleClick() {
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  const data = `<tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td>${age}</td>
                </tr>`;

  document.getElementById("tbody").innerHTML += data;
}
