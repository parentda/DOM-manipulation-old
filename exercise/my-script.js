// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const req1 = document.createElement('p');
req1.style.color = 'red';
req1.textContent = "Hey I'm red!";

const req2 = document.createElement('h3');
req2.style.color = 'blue';
req2.textContent = "I'm a blue h3!";

const req3 = document.createElement('div');
req3.classList.add('req3');
req3.style.cssText = 'background-color: pink; border: solid black';

const req4 = document.createElement('h1');
req4.textContent = "I'm in a div";

const req5 = document.createElement('p');
req5.textContent = "ME TOO!";

req3.append(req4, req5);
container.append(content, req1, req2, req3);
