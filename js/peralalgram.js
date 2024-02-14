// function CalculatePeralleogram(){
//     // const baseInput = document.getElementById('peralalgram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = etPeraleloGram();
//     console.log(base);

// }

// function etPeraleloGram(){
//     const baseInput = document.getElementById('peralalgram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }


function CalculateePralleogram(){
    const base = getInputValueById('peralalgram-base');
    // console.log('base value', base);

    const height = getInputValueById('Parallelogram-height');
    // console.log('height value', height);

    const area = base * height;
    console.log('area out put',area);

    setInnerTextById('per-erea', area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementArea, area){
    const element = document.getElementById(elementArea);
    element.innerText = area;
}