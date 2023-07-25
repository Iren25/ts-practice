/* №2
Создать расширенный интерфейс студента с полями
additionalGroup[] 
(массив, содержащий дополнительные группы, необязательное поле)
isRepeat (студент повторяет курс или нет)
Создать несколько объектов
*/
interface Student {
    firstName: string;
    lastName: string;
    isActive: boolean;
    spacialization: 'QA' | 'FullStack';
    group: string;
    missedClasses: number;
}

let student1: Student = {
    firstName: "Peter",
    lastName: "Ivanov",
    isActive: true,
    spacialization: "FullStack",
    group: "cohort-25",
    missedClasses: 0
}

let student2: Student = {
    firstName: "Ivan",
    lastName: "Petrov",
    isActive: true,
    spacialization: "QA",
    group: "cohort-25",
    missedClasses: 1
}

interface StudentExtends extends Student {
    additionalGroup?: [string];
    isRepeat: boolean;
}
let student3: StudentExtends = {
    firstName: "Makar",
    lastName: "Sidorov",
    isActive: true,
    spacialization: "QA",
    group: "cohort-23",
    missedClasses: 3,
    isRepeat: false
}
let student4: StudentExtends = {
    additionalGroup: ['cohort-27'],
    isRepeat: true,
    firstName: "Oleg",
    lastName: "Kolosov",
    isActive: true,
    spacialization: "FullStack",
    group: "cohort-26",
    missedClasses: 0
}

// №3
// Создать функцию, которая принимает массив чисел и возвращает их сумму. 
function getSum(array: number[]): number{
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(getSum([2, 5, 8]));

//№4
// Создать функцию, которая принимает тип платежа (“cash”, “card”, “bank transfer”) и возвращает код 100, 200, 300 соответственно.
const getCodeByPayment = (string: 'cash' | 'card' | 'bank transfer'): number | string => {
    switch (string) {
        case 'cash': return 100;
        case 'card': return 200;
        case 'bank transfer': return 300; 
        default: return 'invalid method';
    }
}
console.log(getCodeByPayment('card'));


/* №5*
Создать тип данных описывающий функцию, которая принимает аргумент-массив чисел
и возвращает число. Создать переменную этого типа, в которую положить функцию написанную на шаге 3. 
Вызвать ее.
*/
type SumOfPayments = (getSum: number[]) => number;
let weekly: SumOfPayments = getSum;
console.log(weekly([25, 40, 30]));

