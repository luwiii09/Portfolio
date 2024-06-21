document.addEventListener('DOMContentLoaded', function () {
  //A script element to load Feather Icons
  const featherScript = document.createElement('script');
  featherScript.src = 'https://unpkg.com/feather-icons';
  featherScript.onload = function () {
    feather.replace();
  };
  document.head.appendChild(featherScript);

  //Function for dark mode on and off
  function darkMode() {
    const body = document.body;
    const iconContainer = document.querySelector('.darkModeIcon');

    body.classList.toggle('darkMode');
    iconContainer.innerHTML = '';

    //Updates the icon from moon to sun
    const newIcon = document.createElement('i');
    newIcon.classList.add('feather');

    if (body.classList.contains('darkMode')) {
      newIcon.setAttribute('data-feather', 'sun');
      newIcon.setAttribute('style', 'color: white');
    } else {
      newIcon.setAttribute('data-feather', 'moon');
    }

    iconContainer.appendChild(newIcon);

    feather.replace();
  }

  //Add click event listener to implement dark mode
  const darkModeIcon = document.querySelector('.darkModeIcon');
  darkModeIcon.addEventListener('click', darkMode);
});
