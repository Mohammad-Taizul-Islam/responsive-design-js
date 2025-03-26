function createParagraph(){
    const para = document.createElement('p');
    para.textContent = ' You clicked the button!';
    document.body.appendChild(para);
}


const onTurnOn = () => {
    const eyeImage = document.querySelector('img');
    // Change the image source to the "on" state image
    eyeImage.src = "/TwtY.gif"; // or whatever your "on" image is
    eyeImage.alt = "eye on";
}

const onTurnOff = () => {
    const eyeImage = document.querySelector('img');
    // Change the image source to the "off" state image
    eyeImage.src = "/LLuC.gif"; // or whatever your "off" image is
    eyeImage.alt = "eye off";
}