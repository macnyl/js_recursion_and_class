'use strict';

//1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

function pow(base, exponent){
    if (typeof exponent !== 'number'){
        throw new TypeError('The argument must be number value');
    } 
    if (!Number.isSafeInteger(exponent)){
        throw new RangeError('The argument must be a finite value');
    }
    if (!Number.isFinite(exponent)){
        throw new RangeError('The argument must be non negative integer value');

    }
//Для рекурсивной функции возведения числа в степень pow(base, exponent) реализовать валидацию передаваемых значений и генерацию ошибок соостветствующих типов.
//Вызов функции заключить в блок try с отлавливанием исключительных ситуаций (ошибок) разных типов с оповещением пользователя о типе наступившей ошибки.    
    try{
    if (exponent == 1){
        return base;
    }else {
        return base * pow(base, exponent - 1);
    }
    } catch(e){
        console.error(e);
    }
}

//2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль).
const brackets = [];
function bracketWrapper2(n) {
    if (n === 0) {
        return;
    }
    brackets.unshift(')');
    brackets.push('(');
    bracketWrapper2(n - 1);
    return brackets;
    
}
bracketWrapper2(3);
console.log('brackets2 :>> ', brackets);

 


















