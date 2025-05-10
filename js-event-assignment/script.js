// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector("button[type='submit']");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("🎉 Form submitted! Welcome to the Magic Playground.");
  });

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });

    card.addEventListener("dblclick", () => {
      alert("🌟 Secret discovered! You're a true explorer.");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "m") {
      alert("🔑 You pressed the magic key 'M'!");
    }
  });

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  emailInput.addEventListener("input", () => {
    if (!emailInput.value.includes("@")) {
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.borderColor = "green";
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
      passwordInput.style.borderColor = "red";
    } else {
      passwordInput.style.borderColor = "green";
    }
  });
});
