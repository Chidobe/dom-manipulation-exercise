const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey i'm red!";
para.setAttribute('style', 'color:red;');
//container.appendChild(para);

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!";
heading.style.cssText = "color: blue;";
//container.insertBefore(heading, para);

const newDiv = document.createElement('div');
newDiv.innerHTML = "<h1 style='color:green'>I'm in a div</h1> <p>me too</p>" ;
newDiv.setAttribute('style', 'background-color: pink; border: 2px solid black;');

/* i am appending all elements at once instead of one after the other */
container.append(para, heading, newDiv);