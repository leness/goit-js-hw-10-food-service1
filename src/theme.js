const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkPosition();
currentCheckPosition();

refs.checkbox.addEventListener('change', checkChange);

function checkChange(evt) {

  if (evt.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function checkPosition() {
    const checkTheme = localStorage.getItem('theme');
    
  if (checkTheme === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}

function currentCheckPosition() {
  const checkTheme = localStorage.getItem('theme');

  if (checkTheme !== Theme.DARK) {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(checkTheme);
  }
}
