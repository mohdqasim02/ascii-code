const switchTheme = (event) => {
  const element = event.target;
  element.classList.toggle('bg-dark');
}

const addText = (event) => {
  const element = event.target;
  const message = prompt("Enter you message");

  const span = document.createElement('span');
  span.innerText = message;

  element.appendChild(span);
};

const getAsciiCode = (event) => {
  console.log(event)
  const asciiCode = event.key.charCodeAt();
  const codeBox = document.querySelector('#ascii-code');

  codeBox.innerText = event.key + " : " + asciiCode;
};

const main = () => {
}

window.onkeydown = getAsciiCode;
window.onload = main;