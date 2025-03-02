function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
  console.log(document.body.style.backgroundColor);
  const currentColor = document.body.style.backgroundColor;

  if (!currentColor || currentColor == 'white') {
    changeBackground('black');
    themeButton.innerText = 'Light Mode';
  } else {
    changeBackground('white');
    themeButton.innerText = 'Dark Mode';
  }
});

//toggle kya hota hai sir??? - [On ko Off] and [Off ko On]
