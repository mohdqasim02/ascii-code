const getAsciiCode = (event) => {
  const asciiCode = event.key.charCodeAt();
  const codeBox = document.querySelector('#ascii-code');

  codeBox.innerText = `${event.key} : ${asciiCode}`;
};

window.onkeydown = getAsciiCode;