document.addEventListener('DOMContentLoaded',()=>{
    const heading = document.createElement('h1');
    heading.textContent = 'Coding is cool';
    document.body.appendChild(heading);



    const image = document.createElement('img');
    image.src = 'https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png';
    image.alt = 'The coding logo is coll ';
    document.body.appendChild(image);


    const paragraph = document.createElement('p');
    paragraph.textContent ='At Mozilla, we\'re a global community of';
    document.body.appendChild(paragraph);


const list = document.createElement('ul');
const items = [
    'thechnologists',
    'thinkers',
    'builders'
];


items.forEach((itemText =>{
    const item = document.createElement('li');
    item.textContent = itemText;
    list.appendChild(item);
}))

document.body.appendChild(list);


const paragraph2 = document.createElement('p');


paragraph2.textContent = 'working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.';
document.body.appendChild(paragraph2);



const para3 = document.createElement('p')

para3.textContent = 'Read The';
const link = document.createElement('a');
link.href = 'https://www.mozilla.org/en-US/about/manifesto/';
link.textContent = 'Mozilla Manifesto';


para3 .appendChild(link);

para3.appendChild(document.createTextNode('to learn even more about the values and principles that guide the pursuit of our mission. '))

document.body.appendChild(para3);

})