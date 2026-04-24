/* =========================
   THEME TOGGLE + LOCALSTORAGE
========================= */
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

/* =========================
   VISITOR NAME STATE
========================= */
const visitorNameInput = document.getElementById("visitor-name-input");
const saveNameBtn = document.getElementById("save-name-btn");
const greetingDisplay = document.getElementById("greeting-display");
const greetingForm = document.getElementById("greeting-form");
const visitorNameDisplay = document.getElementById("visitor-name-display");

const savedName = localStorage.getItem("visitorName");
if (savedName) {
  showGreeting(savedName);
}

saveNameBtn.addEventListener("click", () => {
  const name = visitorNameInput.value.trim();
  if (name) {
    localStorage.setItem("visitorName", name);
    showGreeting(name);
  }
});

function showGreeting(name) {
  visitorNameDisplay.textContent = name;
  greetingDisplay.classList.remove("hidden");
  greetingForm.classList.add("hidden");
}

/* =========================
   TIMER — Time on site
========================= */
const timerEl = document.getElementById("timer");
let seconds = 0;

setInterval(() => {
  seconds++;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  timerEl.textContent = `⏱ Time on site: ${m}m ${s}s`;
}, 1000);

/* =========================
   PROJECT FILTER + SORT + SEARCH
========================= */
const searchInput = document.getElementById("project-search");
const projects = document.querySelectorAll(".project-card");
// search
searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  projects.forEach(project => {
    const name = project.dataset.name.toLowerCase();

    if (name.includes(searchValue)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const emptyMessage = document.getElementById("empty-message");
const projectsGrid = document.getElementById("projects-grid");
const sortSelect = document.getElementById("sort-select");

let activeFilter = "all";

function applyFilterAndSort() {
  // 1. Filter
  let visible = projectCards.filter((card) => {
    const category = card.dataset.category;
    return activeFilter === "all" || category === activeFilter;
  });

  // 2. Sort
  const sortValue = sortSelect.value;

  if (sortValue === "name-asc") {
    visible.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
  } else if (sortValue === "name-desc") {
    visible.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
  } else if (sortValue === "date-desc") {
    visible.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
  } else if (sortValue === "date-asc") {
    visible.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
  }

  // 3. Hide all first
  projectCards.forEach((card) => (card.style.display = "none"));

  // 4. Show & re-append sorted cards
  if (visible.length === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
    visible.forEach((card) => {
      card.style.display = "block";
      projectsGrid.appendChild(card); // re-order in DOM
    });
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    applyFilterAndSort();
  });
});

sortSelect.addEventListener("change", applyFilterAndSort);

/* =========================
   CONTACT FORM VALIDATION
========================= */
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

function showFieldError(errorEl, msg) {
  errorEl.textContent = msg;
  errorEl.classList.remove("hidden");
}

function hideFieldError(errorEl) {
  errorEl.classList.add("hidden");
}

function isValidEmail(email) {
  // Checks for at least: something@something.something
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Inline validation on blur
nameInput.addEventListener("blur", () => {
  if (!nameInput.value.trim()) {
    showFieldError(nameError, "Please enter your name.");
  } else {
    hideFieldError(nameError);
  }
});

emailInput.addEventListener("blur", () => {
  if (!emailInput.value.trim()) {
    showFieldError(emailError, "Please enter your email.");
  } else if (!isValidEmail(emailInput.value.trim())) {
    showFieldError(emailError, "Invalid email format (e.g. name@email.com).");
  } else {
    hideFieldError(emailError);
  }
});

messageInput.addEventListener("blur", () => {
  if (messageInput.value.trim().length < 10) {
    showFieldError(messageError, "Message must be at least 10 characters.");
  } else {
    hideFieldError(messageError);
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  let valid = true;

  formMessage.classList.remove("success", "error");
  formMessage.textContent = "";

  if (!name) {
    showFieldError(nameError, "Please enter your name.");
    valid = false;
  } else {
    hideFieldError(nameError);
  }

  if (!email) {
    showFieldError(emailError, "Please enter your email.");
    valid = false;
  } else if (!isValidEmail(email)) {
    showFieldError(emailError, "Invalid email format (e.g. name@email.com).");
    valid = false;
  } else {
    hideFieldError(emailError);
  }

  if (message.length < 10) {
    showFieldError(messageError, "Message must be at least 10 characters.");
    valid = false;
  } else {
    hideFieldError(messageError);
  }

  if (!valid) {
    formMessage.textContent = "Please fix the errors above before sending.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = "Message sent successfully! Thank you for contacting me.";
  formMessage.classList.add("success");
  contactForm.reset();
});

/* =========================
   GITHUB API INTEGRATION
========================= */
const GITHUB_USERNAME = "Dana11a"; 
const githubLoader = document.getElementById("github-loader");
const githubError = document.getElementById("github-error");
const githubGrid = document.getElementById("github-grid");

async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = (await response.json()).slice(0, 3);

    githubLoader.classList.add("hidden");

    if (!repos || repos.length === 0) {
      githubError.querySelector("p").textContent =
        "No public repositories found.";
      githubError.classList.remove("hidden");
      return;
    }

    repos.forEach((repo) => {
      const card = document.createElement("a");
      card.href = repo.html_url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = "github-card";

      const desc = repo.description
        ? repo.description
        : "No description provided.";

        card.innerHTML = `
        <h3>${escapeHTML(repo.name)}</h3>
        <p>${escapeHTML(desc)}</p>
      
        <div class="github-card-footer">
          <span>⭐ ${repo.stargazers_count}</span>
          ${repo.language ? `<span>🔵 ${escapeHTML(repo.language)}</span>` : ""}
          <span>🍴 ${repo.forks_count}</span>
      
          <span class="view-link">View →</span>
        </div>
      `;

      githubGrid.appendChild(card);
    });

    githubGrid.classList.remove("hidden");
  } catch (err) {
    console.error("GitHub fetch failed:", err);
    githubLoader.classList.add("hidden");
    githubError.classList.remove("hidden");
  }
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

fetchGitHubRepos();

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().top < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);