// modul 2.3
// task 1

// const enterNumber = prompt('Введите число')

// const number = +enterNumber;

// if(typeof number == "number" && !isNaN(number)){
//     if (number == 0) {
//         console.log('ноль')
//     } else if (number % 2 == 0) {
//         console.log('четное')
//     } else {
//         console.log('нечётное')
//     }
// } else {
//     console.log('Упс, кажется, вы ошиблись')
// }

// task 2

// let x ;

// switch (typeof x) {
//     case 'number':
//         console.log('x-число');
//         break;
//     case 'string':
//         console.log('x-строка');
//         break;
//     case 'boolean':
//         console.log('x-булевое значение');
//         break;
//     default:
//         console.log('Тип x не определен');
// }


// modul 2.4
// task 3

// let str = 'Hello';
// console.log(str.split("").reverse().join(""));

// task 4

// console.log(Math.floor(Math.random()*100));

// modul 2.5
// task 5

// const arr = [0, null, NaN, 0, 1, 3, 5, "str"]
// console.log('Количество элементов:', arr.length)

// for (let i = 0; i < arr.length; i++ ) {
//     console.log(arr[i])
//     }


// modul 2.6
// task 6

// let mass = [1, 2, 3, 3]

// let forEach = true;
// const reference = mass[0];

// for (let item of mass) {
//     if ( item !== reference) {
//         forEach = false;
//     }
// }

// console.log(forEach)


// task 7

// const arr1 = [0, NaN, null, 0, 1, 2, 3, 4, "str"]

//     let sumEven = 0;
//     let sumOdd = 0;
//     let sumZero = 0;

//     for (let i = 0; i < arr.length; i++) {
//             if (arr1[i] === 0) {
//                 sumZero++;
//             } else if (arr1[i] % 2 === 0) {
//                 sumEven++;
//             } else {
//                 sumOdd++;
//             }
//         }

// console.log('Чётных элементов:' + sumEven)
// console.log('нечетных элементов:' + sumOdd)
// console.log('нулей:' + sumZero)

// modul 2.7
// task 8

// let map = new Map();

// map.set('html', 'HTML');
// map.set('css', 'CSS');
// map.set('js', 'JS')

// for (let [key, value] of map) {
//     console.log(`ключ-${key}, значение-${value}`)
// }


// modul 3.2
// task 1

// function getType() {
//     const arr2 = [0, NaN, null, 0, 1, 2, 3, 4, "str"]

//     let sumEven = 0;
//     let sumOdd = 0;
//     let sumZero = 0;

//     for (let i = 0; i < arr2.length; i ++) {
//         if (arr2[i] === 0) {
//             sumZero++;
//         }else if (arr2[i] % 2 === 0) {
//             sumEven++;
//         }else {
//             sumOdd++;
//             }
//         }
    
//         console.log('Чётных элементов:' + sumEven)
//         console.log('нечетных элементов:' + sumOdd)
//         console.log('нулей:'+ sumZero)
// }
    

// getType()


// modul 3.4
// task 2

// function isPrime(num) {
//     let _true = 'число простое', _false = 'ответ неверный';
//     if (num <= 1 && num > 1000) return _false;
//     if (num == 2) return _true;
//     for (let i = 2; i <= num / 2; i++) {
//     if (num % i == 0) {
//       return _false;
//     }
//     }
//     return _true;
//     }
// console.log(isPrime(53));
// console.log(isPrime(1020));


// modul 3.5
// task 3

// function example(a) {
//     return function(b) {
//         return a + b
//     }
// };

// const resultFunc = example(5);

// const sum = resultFunc(5);

// console.log(sum);

// modul 3.7
// task 4

// function logNumber(begin, end) {
//     let current = begin;

//     let timerId = setInterval(function() {
//         console.log(current);
//         if (current == end) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000);
// }

// logNumber(5, 15);


// modul 3.8
// task 5

// const pow = (x, n) => {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// const result = pow(2, 3)

// console.log(result)


// modul 4.3
// task 1

// let computer = {
//     brand: 'Lenovo',
//     cpu: 'i7',
//     price: 12000
// }


// function printObj(arg) {
// return computer

// }
// console.log(computer);


// task 2



// task 3

// const emptyObj = Object.create(null);

// console.log(emptyObj);

// modul 4.4
// task 4


class electricalEquipment {
    constructor (name, manufacture){
        this.name = name;
        this.manufacture = manufacture;
    }
    getInfo() {
        return `Название: ${this.name} от производителя ${this.manufacture}.`
    }
    getpowerConsumption = function(power) {
        return `Энергопотребление у ${this.name} мощность ${power} Вт.`
    }
    getTurn = function(on_off) {
        return `Статус: ${this.name} переключатель ${on_off}.`
    }
}

class Lighting extends electricalEquipment {
    constructor (name, manufacture, typeOfLamp) {
        super(name);
        this.manufacture = manufacture;
        this.typeOfLamp = typeOfLamp;
    }
    getInfo() {
        return `Название: ${this.name} от производителя ${this.manufacture}.`
    }
    getPowerConsumption = function(power) {
        return `энергопотребление  ${this.name} мощность ${power} Вт.`
    }
}

class PC extends electricalEquipment {
    constructor(name, manufacture, display) {
        super(name);
        this.manufacture = manufacture;
        this.display = display;
    }
    getTurn = function(on_off) {
        return `Статус: ${this.name} переключатель ${on_off}.`
    }
    getInfo() {
        return `Название: ${this.name} от производителя ${this.manufacture}. монитор в дюймах ${this.display}.`
    }
}
const lamp = new Lighting("Лампа", "Лисма", "LED");

console.log(lamp.getInfo());
console.log(lamp.getPowerConsumption(10));
console.log(lamp.getTurn("off"));

const computer = new PC("монитор", "samsung", 17);

console.log(computer.getInfo());
console.log(computer.getpowerConsumption(3));
console.log(computer.getTurn("on"));