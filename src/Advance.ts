// Type aliases
// unions and intersection 
// Type narrowing
// Nullable types



// ********************  Type aliases
/*type Employee = { 
    readonly id : number,
    name  : string,
    retire ?: (date : Date) => void
}
let employee : Employee  = { id : 1 , name : 'Anil'}


console.log(employee);

let emplyee2 : Employee = {
    id : 2,
    name : 'Sunil',
}

console.log(emplyee2); */



// ****************************Union Types && Narrowing 

/*function kgTolbs(weight : number | string) : number{
    // Narrowing 
    if (typeof weight === 'number')
        return weight * 2.2
    else{
        return parseInt(weight) * 2.2 
    }

}

kgTolbs(10)
kgTolbs('24') */


// ***********************Intersection






