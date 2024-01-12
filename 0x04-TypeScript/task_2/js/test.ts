import {createEmployee, isDirector, Teacher, Director, executeWork} from './main'

console.log(createEmployee(1000))
console.log(isDirector(new Teacher))

console.log(executeWork(createEmployee(1000)));