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

/*type Draggable = {
    drag : () => void
}

type Resizeable = {
    resize : () => void
}

type UIWidget = Draggable & Resizeable

let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
} */


// ********** Literla Types 

// Literal (exact, specific)

/*type Quantity = 50 | 100 

let quantity : Quantity= 100;

type Metric = 'cm' | 'inch'

console.log(quantity); */


// ***************************8nullable Types

// function greeet(name : string  | null | undefined){

//     if (name)
//         console.log(name.toUpperCase());
//     else {
//         console.log('Jayjaga');
        
//     }

    
    
    
// }
// console.log(greeet(null))


// *******************Optional Chaining
type Customer = {
    birthday ?: Date
}

function getCustomer(id : number) : Customer | null{
    return id  === 0 ? null : { birthday : new Date() }
}

let customer = getCustomer(1)


/*if( customer !== null && customer !==  undefined)
    console.log(customer);
else 
    console.log('you will have to  set value for it .');
*/


// ******Optional property acces operator

// console.log(customer?.birthday?.getFullYear());

//************ Optional element acces opertor
// Customer?.[0]

// Optional Call

let Call : any = null;
console.log(Call ?.('a'))









    








