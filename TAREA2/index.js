var fs = require('fs');

var readline = require('readline');
var rl = readline.createInterface({
	
	input: process.stdin,
	output: process.stdout
	
});

var userName; 

console.log('Welcome to the homework two');

rl.question("What is your name?", (name) => {
	userName = name;
	console.log('¡Hi ' + userName + '!'); 
	
	rl.setPrompt('\n \nThis is a events calendar that allows you to:\n1-View events\n2-Add events\n3-Delete events\n(TO LEAVE THIS PROGRAM WRITE "exit")\nInsert "1" to view events, "2" to add a new event, "3" to Delete an event or "exit" to leave the program \n');
	rl.prompt();
	
	rl.on('line',(petition) => {
		if(petition.toLowerCase() === 'exit'){
			rl.close();
			rl.on('close', () => {
				console.log("\n¡Bye " + userName + "!");
				process.exit();
			});
		}	
		else{
			if(petition != '1' && petition != '2' && petition != '3')
				console.log("Don´t exist this prtition, try again");
			else{
				if(petition == '1'){
					console.log('Pending events:');
					fs.readFile('citas.txt', (error,content) => {
						if(content){
							console.log(content.toString());
						}
						else{
							console.log('No events, try again...');
						}
						console.log('\n\nInsert other value, 1-View events 2-Add events 3-Delete events (TO LEAVE THIS PROGRAM WRITE "exit")');
					});
				}
				if(petition == '2'){
					rl.question("Event's name?", (eventName) => {
						rl.question("Event's date?", (eventDate) => {
							rl.question("Event's hour?", (eventHour) => {
								fs.appendFile("citas.txt", '\n' + eventName + ' // ' + eventDate + ' // ' + eventHour, (err) => {
																			if(err) {
																				return console.log(err);
																			}
																			console.log("Your event was saved!");
								});
								console.log('\n\nInsert other value, 1-View events 2-Add events 3-Delete events (TO LEAVE THIS PROGRAM WRITE "exit")');
							});
						});
					});	
				}
				if(petition == '3'){
					fs.readFile('citas.txt', (error,content) => {
						content = content.toString().split("\n");
						console.log(content);
						rl.question("Give to me the event number you want delete ", (eventNumber) => {
							content.splice(eventNumber - 1,1);
							fs.writeFile("citas.txt", content, function(err) {
																		if(err) {
																			return console.log(err);
																		}
																		console.log("The event was deleted!");
							});
							console.log('\n\nInsert other value, 1-View events 2-Add events 3-Delete events (TO LEAVE THIS PROGRAM WRITE "exit")');							
						});
					});
				}
			}
		}
	});
});

