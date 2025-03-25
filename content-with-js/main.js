document.addEventListener('DOMContentLoaded',()=>{
    const style = document.createElement('style');
    style.textContent =`
    body {
    width : 600px;
    margin : 0 auto;
    background-color : #f9f9f9;
    padding : 20px;
    font-family : 'Arial',sans-serif;
    line-height : 1.6;
    color : #333333;

    }
    
    h1={
    color : #00539F;
    text-align : center;
    text-shadow : 2px 2px 1px rgba(0,0,0,0.2);
    font-size : 2.5em;
    margin-bottom : 20px;
    
    }

    img{
        display : block;
        margin : 0 auto;
        width : 200px;
        border-radius : 10px;
        box-shadow : 0 4px 8px rgba(0,0,0,0.1);
    }

    p{
        margin : 16px 0px;
        color : #444444;

    }

    ul{
        background-color : #e6f2ff;
        padding : 20px 40px;
        border-radius : 8px;
        margin: 20px 0px;

    }

    li{
        margin : 10px 0px;
        list-style : node ;
        color : blue;
    }

    a{
        color : #0066cc;
        text-decoration : none;
        font-weight : bold;

    }

    a:hover{
        text-decoration : underline ;
        color : #004499;
    }
    `;
    document.head.appendChild(style);

    const heading = document.createElement('h1');
    heading.textContent = 'Coding is Cool!';
    document.body.appendChild(heading);

    const image = document.createElement('img');
    image.src = 'https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png';
    image.alt = 'The Firefox logo: a flaming fox surrounding the Earth.';
    document.body.appendChild(image);

    const para1 = document.createElement('p');
    para1.textContent = 'At Mozilla, we\'re a global community of';
    document.body.appendChild(para1);

    const list = document.createElement('ul');
    const items = [
        'technologists',
        'thinkers',
        'bulders'
    ]


    items.forEach(itemText =>{
        const item = document.createElement('li');
        item.textContent= itemText;
        list.appendChild(item);
    })

    document.body.appendChild(list);

    const para2 = document.createElement('p');
    para2.textContent =  'working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.';
    document.body.appendChild(para2);
    
    const para3 = document.createElement('p');
    para3.textContent = ' Read The'
    const link = document.createElement('a');
    link.href = 'https://www.mozilla.org/en-US/about/manifesto/';
    link.textContent = 'Mozila Manifest0';

    para3.appendChild(link);
    para3.appendChild(document.createTextNode(' to learn even more about the values and principles that guide the pursuit of our mission.'));
    document.body.appendChild(para3);
});