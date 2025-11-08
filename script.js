let display = document.getElementById("display");

// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeToggle = document.getElementById('themeToggle');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Initialize theme on page load
initTheme();

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
