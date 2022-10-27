const color = async () => {
  const color_api = await fetch("https://x-colors.herokuapp.com/api/random");
  const color_data = await color_api.json();
  console.log(color_data.hex);
  bodytag = document.querySelector("body");
  bodytag.style.backgroundColor = color_data.hex;
};
color();
