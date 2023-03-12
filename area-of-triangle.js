function findArea(baseValue, heightValue) {
    let areaValue = baseValue * heightValue / 2;
    return areaValue;
}

const baseValue = 3;
const heightValue = 4;
let areaOfTriangle = findArea(baseValue, heightValue);
console.log(areaOfTriangle);