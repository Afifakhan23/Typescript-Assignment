// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
Guest_list.map((item)=>{
console.log(`Dear${item}, you are invited for dinner`);

})


