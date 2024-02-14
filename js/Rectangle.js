function rectangleArea(){
    // get lenth of the Rectangle
    const RectangleLenthInput = document.getElementById('Rectangle-lenth');
    const RectangleText = RectangleLenthInput.value;
    const lenth = parseFloat(RectangleText);
    console.log(lenth);

    // get with by Rectangle
    const withInput = document.getElementById('rectangle-with');
    const withText = withInput.value;
    const width = parseFloat(withText);
    console.log(width);

    // calculate rectangle area
    const area = lenth * width;
    console.log('area of the rectangel',area);

    // disply rectangle area
    const rectangelAreaSpan = document.getElementById('rectangle-area');
    rectangelAreaSpan.innerText = area;
}