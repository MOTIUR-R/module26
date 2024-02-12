function tringleCal(){
    // get tringle base value
    const tringleBase = document.getElementById('tringle-base');
    const tringleBaseText = tringleBase.value;
    const base = parseFloat(tringleBaseText);
    console.log(base);

    // get trinale hight value
    const tringleHight = document.getElementById('tringle-hight');
    const tringleHightText = tringleHight.value;
    const hihgt = parseFloat(tringleHightText);
    console.log(hihgt);

    // tringle calculator
    const area = 0.5 * base * hihgt;
    console.log('area is the tringle is',area);

    // displiy tringle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}