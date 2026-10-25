setTimeout(() => {
  document.body.innerHTML = `
    <div style="
      background: #000;
      color: #00ff66;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-family: monospace;
      padding: 20px;
      box-sizing: border-box;
    ">
      <h1 style="font-size: 32px; color: #ff3030;">
        ⚠️ പണി പാളും!
      </h1>

      <p style="color: #00ff66; font-size: 22px;">
        ചുമ്മാ മുട്ടാൻ നിൽക്കല്ലേ! 😈
      </p>
    </div>
  `;
}, 3000);
