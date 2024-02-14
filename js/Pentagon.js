function calculatePentagon(){
    const permiter = getInputValueById2('pentagon-pera')
    const apod = getInputValueById2('pentagon-apod');
    console.log(permiter, apod);

    const area = 0.5 * permiter * apod;
    setInnerTextById2('pentagon-erea', area);
}

function getInputValueById2(inputFieldId2){
    const inputField = document.getElementById(inputFieldId2);
    const inputValueText2 = inputField.value;
    const value2 = parseFloat(inputValueText2);
    return value2;

}

function setInnerTextById2(elementId, area){
    const element2 = document.getElementById(elementId);
    element2.innerText = area;
}