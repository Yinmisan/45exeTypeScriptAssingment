"use strict";
//Exercise #1
{
    console.log("                                                      ");
    console.log("\x1b[32m 2. Personal Message: Store a person’s name in a variable, and print a message to that person. \x1b[0m");
    console.log("                                                      ");
    let name = "Javad";
    console.log(`${name} how are you doing today `);
    console.log("                                                      ");
}
//Exercise #2
{
    console.log("\x1b[32m 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.\x1b[0m");
    console.log("                                                      ");
    let name = "Javad";
    console.log(name.toLowerCase());
    console.log(name.toUpperCase());
    console.log(name.replace(/\b\w/g, (letter) => letter.toUpperCase()));
    console.log("                                                      ");
}
//Exercise #3
{
    console.log("\x1b[32m 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.\x1b[0m");
    console.log("                                                      ");
    let quote = "Muhammad Ali once said, “If my mind can conceive it, if my heart can believe it--then I can achieve it.”";
    console.log(quote);
    console.log("                                                      ");
}
//Exercise #4
{
    console.log("                                                      ");
    console.log("\x1b[32m 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.\x1b[0m");
    console.log("                                                      ");
    let famous_person = "Muhammad Ali";
    let quote = "Don't count the days. Make the days count.";
    let message = `${famous_person} once said, “${quote}”`;
    console.log(message);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. \x1b[0m");
    console.log("                                                      ");
    let name = "\t\n  Ali Javad Ahmad   \n\t";
    console.log(name);
    let strippedName = name.trim();
    console.log(strippedName);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.  \x1b[0m");
    console.log("                                                      ");
    let addition = 4 + 4;
    let subtraction = 10 - 2;
    let multiplication = 2 * 4;
    let division = 16 / 2;
    console.log(addition);
    console.log(subtraction);
    console.log(multiplication);
    console.log(division);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  8. Your output should simply be four lines with the number 8 appearing once on each line. \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message. \x1b[0m");
    console.log("                                                      ");
    let favNumb = 92;
    console.log("my favorite number is", favNumb);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. \x1b[0m");
    console.log("                                                      ");
    let guestList = ["onion", "potato", "carrot"];
    function splice(stateOfItem, itemName) {
        if (stateOfItem == "add") {
            console.log(`added ${itemName}`);
            var itemIndexOf = guestList.length;
            guestList.splice(itemIndexOf, 0, itemName);
        }
        else if (stateOfItem == "delete") {
            var itemIndexOf = guestList.indexOf(itemName);
            console.log(`deleted ${itemName}`);
            guestList.splice(itemIndexOf, 1);
        }
        else if (stateOfItem == "index") {
            var itemIndexOf = guestList.indexOf(itemName);
            console.log(`Index of ${itemName} is at ${itemIndexOf}`);
        }
        else if (stateOfItem == "total" && itemName == "index") {
            console.log(`Length of Array is ${guestList.length}`);
        }
        return guestList;
    }
    //use this splice function on the Array to  add or delete
    console.log(splice("add", "milk"));
    console.log(splice("delete", "carrot"));
    console.log(splice("add", "tea"));
    //use this splice function on the Array to  see the index of the item or Total index
    console.log(splice("index", "onion"));
    console.log(splice("total", "index"));
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. \x1b[0m");
    console.log("                                                      ");
    const names = ["Dymitri", "glovkin", "Putin", "Vlad"];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m 12. Greetings:  \x1b[0m");
    console.log("                                                      ");
    const names = ["Dymitri", "Glovkin", "Putin", "Vlad"];
    console.log("whats up", names[0]);
    console.log("how you doing", names[1]);
    console.log("Hello", names[2]);
    console.log("Privyet", names[3]);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. \x1b[0m");
    console.log("                                                      ");
    const motorcycle = [
        "Honda 70",
        "Suzuki 110",
        "Yamaha 125",
        "Ktm 200",
    ];
    console.log(`i have a ${motorcycle[0]}`);
    console.log(`i also have a ${motorcycle[1]}`);
    console.log(`i would like to own a ${motorcycle[2]}`);
    console.log(`and a ${motorcycle[3]} would be Great`);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  14. Guest List: If you could invite anyone, \x1b[0m");
    console.log("                                                      ");
    const names = ["Quaid e Azam", "Allama Iqbal", "General Zia"];
    console.log(`Sir, ${names[0]} You are invited to my Eid BBQ Dinner`);
    console.log(`Sir, ${names[1]} You are invited to my Eid BBQ Dinner`);
    console.log(`Sir, ${names[2]} You are invited to my Eid BBQ Dinner`);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. \x1b[0m");
    console.log("                                                      ");
    const names = [
        "Quaid e Azam",
        "Allama Iqbal",
        "General Zia",
        "Zulfikar Ali Bhutto",
    ];
    console.log(`Sir, ${names[0]} You are invited to my Eid BBQ Dinner`);
    console.log(`Sir, ${names[1]} You are invited to my Eid BBQ Dinner`);
    console.log(`Sir, ${names[2]} You are invited to my Eid BBQ Dinner`);
    console.log(`Sir, ${names[2]} will not be able to make it to the Dinner`);
    console.log(`Sir, ${names[3]} You are invited to my Eid BBQ Dinner`);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m 14, 15, 16, 17 and 19 \x1b[0m");
    console.log("                                                      ");
    let guestList = ["Quaid e Azam", "Allama Iqbal", "General Zia"];
    function splice(stateOfItem, itemName) {
        if (stateOfItem == "add") {
            console.log(`added ${itemName}`);
            var itemIndexOf = guestList.length;
            guestList.splice(itemIndexOf, 0, itemName);
        }
        else if (stateOfItem == "delete") {
            var itemIndexOf = guestList.indexOf(itemName);
            console.log(`deleted ${itemName}`);
            guestList.splice(itemIndexOf, 1);
        }
        else if (stateOfItem == "index") {
            var itemIndexOf = guestList.indexOf(itemName);
            console.log(`Index of ${itemName} is at ${itemIndexOf}`);
        }
        else if (stateOfItem == "total" && itemName == "index") {
            console.log(`Length of Array is ${guestList.length}`);
        }
        return guestList;
    }
    function inviter(list) {
        for (let i = 0; i <= list.length; i++) {
            console.log(`Invitation sent to ${list[i]}`);
        }
        console.log(`Number of people invited is ${list.length}`);
    }
    console.log(inviter(guestList));
    console.log(splice("delete", "General Zia"));
    console.log(splice("add", "Zulfikar Ali Bhutto"));
    console.log(inviter(guestList));
    console.log(splice("add", "Imran khan"));
    console.log(splice("add", "Ayub khan"));
    console.log(splice("add", "Liaquat Ali Khan"));
    console.log(inviter(guestList));
    console.log(splice("delete", "Liaquat Ali Khan"));
    console.log(splice("delete", "Ayub khan"));
    console.log(splice("delete", "Imran khan"));
    console.log(splice("delete", "Zulfikar Ali Bhutto"));
    console.log(inviter(guestList));
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  18. Seeing the World: Think of at least five places in the world you’d like to visit. \x1b[0m");
    console.log("                                                      ");
    // • Store the locations in a array. Make sure the array is not in alphabetical order.
    let worldToSee = [
        "islamabad",
        "Berlin",
        "Moscow",
        "New york",
        "Tokyo",
    ];
    //• Print your array in its original order.
    console.log(worldToSee);
    //• Print your array in alphabetical order without modifying the actual list.
    console.log(worldToSee.sort);
    //• Show that your array is still in its original order by printing it.
    console.log(worldToSee);
    //• Print your array in reverse alphabetical order without changing the order of the original list.
    console.log(worldToSee.reverse);
    //• Show that your array is still in its original order by printing it again.
    console.log(worldToSee);
    //• Reverse the order of your list. Print the array to show that its
    //order has changed.
    console.log(worldToSee.reverse);
    //• Reverse the order of your list again. Print the list to show it’s back to its original order.
    console.log(worldToSee);
    //• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    console.log(worldToSee.sort);
    //• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything \x1b[0m");
    console.log("                                                      ");
    let cities = ["islamabad", "Berlin", "Moscow", "New york", "Tokyo"];
    console.log("here is a list of Cities", cities);
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m  21. They think of something you could store in a TypeScript Object. \x1b[0m");
    console.log("                                                      ");
    //21
    const Japan = {
        country: "Japan",
        city: "Tokyo",
        code: 81,
        language: "Japanese",
    };
    console.log("here is a Detail of Country", Japan);
    console.log("                                                      ");
}
//Exercise #22
{
    console.log("\x1b[32m  22. Intentional Error: If you haven’t received an array index error in one of your programs  \x1b[0m");
    console.log("                                                      ");
    let worldToSee = [
        "islamabad",
        "Berlin",
        "Moscow",
        "New york",
        "Tokyo",
    ];
    console.log(worldToSee[5]);
    console.log("                                                      ");
}
//Exercise #23
{
    console.log("\x1b[32m  23. Conditional Tests: Write a series of conditional tests.  \x1b[0m");
    console.log("                                                      ");
    let car = "subaru";
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car == "subaru");
    console.log("Is car == 'audi'? I predict False.");
    console.log(car == "audi");
    console.log("Is car != 'bmw'? I predict True.");
    console.log(car != "bmw");
    console.log("Is car != 'subaru'? I predict False.");
    console.log(car != "subaru");
    console.log("Is car === 'Subaru'? I predict False.");
    console.log(car === "Subaru");
    console.log("Is car !== 'Subaru'? I predict True.");
    console.log(car !== "Subaru");
    console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
    console.log(car.toLowerCase() == "subaru");
    console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
    console.log(car.toUpperCase() == "SUBARU");
    console.log("Is car.length > 3? I predict True.");
    console.log(car.length > 3);
    console.log("Is car.length < 3? I predict False.");
    console.log(car.length < 3);
    console.log("                                                      ");
}
//Exercise #24
{
    console.log("\x1b[32m 24. More Conditional Tests  \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #25
{
    console.log("\x1b[32m  25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'. \x1b[0m");
    console.log("                                                      ");
    var alien_color = "red";
    if (alien_color == "green") {
        console.log("The player just earned 5 points.");
    }
    else {
        console.log(`alien color is ${alien_color} no points `);
    }
    console.log("                                                      ");
}
//Exercise #26
{
    console.log("\x1b[32m  26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.  \x1b[0m");
    console.log("                                                      ");
    let alien_color = "yellow";
    if (alien_color == "green") {
        console.log("The player earned 5 points.");
    }
    else if (alien_color == "yellow") {
        console.log("The player earned 10 points.");
    }
    else if (alien_color == "red") {
        console.log("The player earned 15 points.");
    }
    console.log("                                                      ");
}
//Exercise #27
{
    console.log("\x1b[32m  27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain. \x1b[0m");
    console.log("                                                      ");
    let alien_color = "Red";
    if (alien_color == "green") {
        console.log("The player earned 5 points.");
    }
    else if (alien_color == "yellow") {
        console.log("The player earned 10 points.");
    }
    else {
        console.log("The player earned 15 points.");
    }
    console.log("                                                      ");
}
//Exercise #28
{
    console.log("\x1b[32m 28  Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then: \x1b[0m");
    console.log("                                                      ");
    let age = 17;
    if (age < 2) {
        console.log("The person is a baby.");
    }
    else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    }
    else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    }
    else if (age >= 65) {
        console.log("The person is an elder.");
    }
    console.log("                                                      ");
}
//Exercise #29
{
    console.log("\x1b[32m  29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array. \x1b[0m");
    console.log("                                                      ");
    let favorite_fruits = ["grape", "orange", "blueberry"];
    if (favorite_fruits.includes("grape")) {
        console.log("Grapes are delicious");
    }
    if (favorite_fruits.includes("orange")) {
        console.log("You really like oranges!");
    }
    if (favorite_fruits.includes("strawberry")) {
        console.log("You really like strawberries!");
    }
    if (favorite_fruits.includes("mango")) {
        console.log("You really like mango!");
    }
    console.log("                                                      ");
}
//Exercise #30
{
    console.log("\x1b[32m  30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user \x1b[0m");
    console.log("                                                      ");
    let userNames1 = ["admin", "Vlad", "Putin", "Dymitri", "Niko"];
    for (let username of userNames1) {
        if (username == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
    console.log("                                                      ");
}
//Exercise #31
{
    console.log("\x1b[32m  31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. \x1b[0m");
    console.log("                                                      ");
    let usernames = [];
    if (usernames.length == 0) {
        console.log("We need to find some users!");
    }
    console.log("                                                      ");
}
//Exercise #32
{
    console.log("\x1b[32m  32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. \x1b[0m");
    console.log("                                                      ");
    let userNames = ["admin", "Vlad", "Putin", "Dymitri", "Niko"];
    function addUser(user) {
        if (userNames.includes(user)) {
            console.log(`${user} Already Exist please try something else `);
        }
        else {
            userNames.push(user);
            console.log(`${user} has been added`);
        }
        return userNames;
    }
    console.log(addUser("admin"));
    console.log(addUser("Misha"));
    console.log("                                                      ");
}
//Exercise #33
{
    console.log("\x1b[32m  33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3. \x1b[0m");
    console.log("                                                      ");
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let number of numbers) {
        if (number == 1) {
            console.log("1st");
        }
        else if (number == 2) {
            console.log("2nd");
        }
        else if (number == 3) {
            console.log("3rd");
        }
        else {
            console.log(`${number}th`);
        }
    }
    console.log("                                                      ");
}
//Exercise #34
{
    console.log("\x1b[32m  34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza. \x1b[0m");
    console.log("                                                      ");
    let pizzas = ["pepperoni", "Fujita", "Tika"];
    for (let pizza of pizzas) {
        console.log(`I like ${pizza} pizza.`);
    }
    console.log("I really love pizza!");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
//Exercise #5
{
    console.log("\x1b[32m   \x1b[0m");
    console.log("                                                      ");
    console.log("                                                      ");
}
