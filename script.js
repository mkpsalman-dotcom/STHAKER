setTimeout(() => {
  const heading = document.querySelector("h1");
  const message = document.querySelector("#message");
  const lines = document.querySelector(".lines");

  if (heading) {
    heading.textContent = "VISUAL TEST COMPLETE";

  }

  if (lines) {
    lines.style.display = "none";
  }
}, 3000);
