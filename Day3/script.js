console.log('JavaScript Date Object Lab')

//Create a new Date object called `currentDate` and log the current date and time
let currentDate = new Date();
console.log(currentDate);
//Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'
export const formatDate = (Date)=>{
    let year = Date.getFullYear();
    let month = Date.getMonth();
    let date = Date.getDate();
    return `${date}-${month}-${year}`
}