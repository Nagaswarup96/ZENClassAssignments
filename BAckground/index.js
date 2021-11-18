const handleClick = () => {
  document.body.style.background = `
  rgb(
      ${Math.floor(Math.random() * 254) + 1},
      ${Math.floor(Math.random() * 254) + 1},
      ${Math.floor(Math.random() * 254) + 1})`;
};
