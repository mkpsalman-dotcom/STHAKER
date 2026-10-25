setTimeout(() => {
  const screen = document.querySelector(".screen");

  if (screen) {
    screen.innerHTML = `
      <h1 style="color:#00ff66; text-shadow:0 0 15px #00ff66;">
        SALMAN
      </h1>
      <p style="color:#ff3030; font-size:20px;">
        ACCESS SIMULATION COMPLETE
      </p>
    `;
  }
}, 4000);
