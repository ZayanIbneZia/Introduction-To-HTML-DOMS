let div = document.createElement('div');
div.id = 'paragraph';
div.innerHTML = '<p>I am the created div!</p>';
document.body.append(div);


let heading = document.getElementById('heading');
heading.innerHTML = '&#128518; &#128511;';

document.querySelector('header p').innerHTML = '<strong>The paragraph in JS!</strong>'
document.body.style.background = 'lightblue';

let image = document.getElementById('image');
image.src = 'OIP (2).jpeg';
image.style.display = 'block';