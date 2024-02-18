// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner


let Guest_list = ["Ayan","Arish","Ahad"];
let guestCantMakeIt: string = "Ayan";
let newGuest: string = 'anil';
Guest_list[Guest_list.indexOf(guestCantMakeIt)] = newGuest;
Guest_list.unshift("Adil");
console.log(Guest_list);
let middle_guest = "Awaiz";
let middle_index = Guest_list.length/2;
Guest_list.splice(middle_index, 0 , middle_guest);
console.log(Guest_list);
Guest_list.push("Adnan");
console.log(Guest_list);
// Guest_list.map((item)=>{
// console.log(`Dear${item}, you are invited for dinner`);

// })
console.log(Guest_list.length+" peoples are invited for dinner");
