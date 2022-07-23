const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey i'm red!";
para.setAttribute('style', 'color:red;');
container.appendChild(para);

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!";
heading.style.cssText = "color: blue;";
container.insertBefore(heading, para);

