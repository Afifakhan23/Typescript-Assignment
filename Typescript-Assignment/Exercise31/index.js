/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
// Non-empty array case
var userNames = ['admin', 'Ali ahmed', 'Kamran khan', 'Muhammad', 'Ali'];
//functional case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
console.log("For non empty username:\n");
greetUsers(userNames);
// to make array empty we just assing an empty array to userNames
userNames = [];
console.log("\n\n For empty username:\n");
greetUsers(userNames);
