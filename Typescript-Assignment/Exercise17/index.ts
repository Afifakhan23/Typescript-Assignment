/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

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

console.log('I invite only two person');
while(Guest_list.length>2){
    let remove_person=Guest_list.pop();
    console.log(`${remove_person} you are not inviting for dinner`);
}
Guest_list.map((item)=>{
    console.log(`Dear ${item}, you are still invited for dinner`);
    
})
Guest_list.pop();
Guest_list.pop();
console.log(Guest_list);

