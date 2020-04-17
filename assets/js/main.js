"use strict";
let arr = [
    [16,-37,54,-4,72],
    [-56,47,4,-16,25],
    [-63,4,-54,76,-4],
    [12,-35,4,47]
];

function calcSumPositiveEl(array) {
    let sumPositiveEl = 0;
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            if (items[j] > 0) {
                sumPositiveEl = sumPositiveEl + items[j];
            }
        }
    }
    return sumPositiveEl;
}
console.log("Сумма положительных элементов массива: " + calcSumPositiveEl(arr));


function calcQuantityPositiveEl(array) {
    let positiveArr = [];
    let quantityPositiveEl = 0;
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            if (items[j] > 0) {
                positiveArr.push(items[j]);
                quantityPositiveEl = positiveArr.length;
            }
        }
    }
    return quantityPositiveEl;
}
console.log("Количество положительных элементов в массиве: " + calcQuantityPositiveEl(arr));

function findMinEl(array) {
    let minElement = null;
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < minElement) {
                minElement = arr[j]
            }
        }
    }
    return minElement;
}
console.log("Минимальный элемент массива: " + findMinEl(arr));

function findMinElIndex(array) {
    let minIndexI = null;
    let minIndexJ = null;
    let minElement = null;
    let arrIndex = [];
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        for (let j = 0; j < arr.length; j++) {
            if(minElement === null || arr[j] < minElement) {
                minIndexI = i;
                minIndexJ = j;
                minElement = arr[j];

            }
        }
    }
    return [minIndexI, minIndexJ];
}
console.log("Индекс наименьшего элемента массива: " + findMinElIndex(arr));

function findMaxEl(array) {
    let maxElement = null;
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > maxElement) {
                maxElement = arr[j]
            }
        }
    }
    return maxElement;
}
console.log("Максимальный элемент массива: " + findMaxEl(arr));

function findMaxElIndex(array) {
    let maxIndexI = null;
    let maxIndexJ = null;
    let maxElement = null;
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        for (let j = 0; j < arr.length; j++) {
            if(maxElement === null || arr[j] > maxElement) {
                maxIndexI = i;
                maxIndexJ = j;
                maxElement = arr[j];
            }
        }
    }
    return [maxIndexI, maxIndexJ];
}
console.log("Индекс наименьшего элемента массива: " + findMaxElIndex(arr));

function getQuantityNegativeEl (array) {
    let negativeArr = [];
    let quantityNegativeEl = 0;
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            if (items[j] < 0) {
                negativeArr.push(items[j]);
                quantityNegativeEl = negativeArr.length;
            }
        }
    }
    return quantityNegativeEl;
}
console.log("Количество отрицательных элементов в массиве: " + getQuantityNegativeEl(arr));


function getQuantityOddEl (array) {
    let oddEl = [];
    let quantityOddEl = 0;
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            let arrayIJ = items[j];
            if ((arrayIJ % 2 !== 0) && (items[j] > 0))  {
                oddEl.push(arrayIJ);
                quantityOddEl = oddEl.length;
            }
        }
    }
    return quantityOddEl;
}
console.log("Количество нечетных положительных элементов: " + getQuantityOddEl(arr));

function getQuantityEvenEl (array) {
    let evenEl = [];
    let quantityEvenEl = 0;
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            let arrayIJ = items[j];
            if ((arrayIJ % 2 == 0) && (items[j] > 0))  {
                evenEl.push(arrayIJ);
                quantityEvenEl = evenEl.length;
            }
        }
    }
    return quantityEvenEl;
}
console.log("Количество четных положительных элементов: " + getQuantityEvenEl(arr));

function calcMultiplayPositiveEl (array) {
    let positiveArr = [];
    let multiplayPositiveEl = 1;
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            if (items[j] > 0) {
                positiveArr.push(items[j]);
                multiplayPositiveEl = multiplayPositiveEl * items[j];
            }
        }
    }
    return multiplayPositiveEl;
}
console.log("Произведение положительных элементов массива: " + calcMultiplayPositiveEl(arr));