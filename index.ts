const numbers = [1, 2, 3, 4, 5];
const target = 3;

function findElement<T>(arr: T[], target: T) {
  return arr.findIndex(el => el === target);
}

console.log(findElement(numbers, target));

//-----------
const person1 = { name: 'Alice', age: 30 };
const person2 = { age: 25, city: 'New York' };

function mergeObjects<T extends object, U extends object >(obj1:T, obj2:U) {
  return { ...obj1, ...obj2 };
}
const mergedPerson = mergeObjects(person1, person2);
console.log(mergedPerson); // Результат: { name: 'Alice', age: 25, city: 'New York' } `

