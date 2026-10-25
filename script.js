setTimeout(() => {
  const message = document.querySelector("p");

  if (message) {
    message.textContent = "Checking complete... 😵";
  }
}, 3000);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    const screen = document.querySelector(".screen");

    if (screen) {
      screen.innerHTML = `
        <div style="font-size:60px">😂</div>
        <h1 style="color:#00ff99">GOTCHA!</h1>
      `;
    }
  });
}
