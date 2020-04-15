"use strict";
let arr = [
    [16,-37,54,-4,72],
    [-56,47,4,-16,25],
    [-63,4,-54,76,-4],
    [12,-35,4,47]
];
let positiveArr = [];
let sumPositiveEl = 0;
let minElArray = [];
let negativeArr = [];

function calcQuantityPositiveEl(arr) {
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            if (items[j] > 0) {
                positiveArr.push(items[j]);
                sumPositiveEl = sumPositiveEl + items[j];
            }
        }
    }
    console.log("Сумма положительных элементов массива: " + sumPositiveEl);
    console.log("Количество положительных элементов в массиве: " + positiveArr.length);
}
calcQuantityPositiveEl(arr);

function findMinIndex(array) {
    let minIndexI = null;
    let minIndexJ = null;
    let minElement = null;
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        for (let j = 0; j < arr.length; j++) {
            if(minElement === null || arr[j] < minElement) {
                minIndexI = i;
                minIndexJ = j;
                minElement = arr[j]
            }
        }
    }
    console.log("Минимальный элемент массива: " + minElement);
    console.log("Координаты минимального элемента: [" + minIndexI + "][" + minIndexJ + "]");
}
findMinIndex(arr);

function findMaxIndex(array) {
    let maxIndexI = null;
    let maxIndexJ = null;
    let maxElement = null;
    for (let i = 0; i < array.length; i++) {
        const arr = array[i];
        for (let j = 0; j < arr.length; j++) {
            if(maxElement === null || arr[j] > maxElement) {
                maxIndexI = i;
                maxIndexJ = j;
                maxElement = arr[j]
            }
        }
    }
    console.log("Максимальный элемент массива: " + maxElement);
    console.log("Координаты максимального элемента: [" + maxIndexI + "][" + maxIndexJ + "]");
}
findMaxIndex(arr);

function getQuantityNegativeEl (array) {
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            if (items[j] < 0) {
                negativeArr.push(items[j]);
            }
        }
    }
    console.log("Количество отрицательных элементов в массиве: " + negativeArr.length);
}
getQuantityNegativeEl(arr);


function getQuantityOddEl (array) {
    let oddEl = [];
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            let arrayIJ = items[j];
            if ((arrayIJ % 2 !== 0) && (items[j] > 0))  {
                oddEl.push(arrayIJ);
            }
        }
    }
    console.log("Количество нечетных положительных элементов: " + oddEl.length);
}
getQuantityOddEl(arr);

function getQuantityEvenEl (array) {
    let evenEl = [];
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];
        for (let j = 0; j < items.length; j++) {
            let arrayIJ = items[j];
            if ((arrayIJ % 2 == 0) && (items[j] > 0))  {
                evenEl.push(arrayIJ);
            }
        }
    }
    console.log("Количество четных положительных элементов: " + evenEl.length);
}
getQuantityEvenEl(arr);

function calcMultiplayPositiveEl (array) {
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
    console.log("Произведение положительных элементов массива: " + multiplayPositiveEl);
}
calcMultiplayPositiveEl(arr);