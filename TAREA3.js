var fs = require('fs');

var readline = require('readline');
var rl = readline.createInterface({
	
	input: process.stdin,
	output: process.stdout
	
});

class Cake{
	constructor(taste, size){
		this.taste = taste;
		this.size = size;
	}
}

function otherCake() {
	let oCake = new Cake('chocolate', 'small');
	return oCake;
}


function list(){
	
	rl.setPrompt('Hi, do you want order any cake?(y/n) "exit to leave"  ');
	rl.prompt();
	
	rl.on('line', (petition) => {
		if(petition.toLowerCase() === 'exit'){
			rl.close();
		}	
		else{
			if(petition.toLowerCase() != 'yes' && petition.toLowerCase() != 'y' && petition.toLowerCase() != 'n' && petition.toLowerCase() != 'no')
				console.log("Don´t exist this petition, try again \n");
			else{
				if(petition == 'yes' || petition == 'y'){
					rl.question("Add cake's taste: ", (taste) => {
						rl.question("Add cake's size: ", (size) => {
							let cakeOne = new Cake(taste, size);
							fs.appendFile("pasteles.txt", 'taste:' + cakeOne.taste + ' // ' + 'size:' + cakeOne.size + '\n', (err) => {
																			if(err){
																				return console.log(err);
																			}
																			console.log('\n\nDo you want add other cake?(y/n) "exit to leave"  ');
							});
							console.log("\nYour cake was added");
						});
					});
				}
				else{
					fs.readFile('pasteles.txt', (err, content) => {
						if(content){
							content = content.toString().split("\n");
							var contentSize = content.length;
							if((contentSize - 1) % 3 == 0 || (contentSize - 1) % 2 == 0){
								if((contentSize - 1) % 3 == 0){
									console.log('\n THIS NUMBER OF CAKES IS NOT VALID');
									rl.close();
								}
								if((contentSize - 1) % 2 == 0){
									var oCake = otherCake();
									fs.appendFile("pasteles.txt", 'taste:' + oCake.taste + ' // ' + 'size:' + oCake.size + '\n', (err) => {
																											if(err){
																												return console.log(err);
																											}
																											fs.readFile('pasteles.txt', (error,content) => {
																																		console.log(content.toString());
																																		rl.close();
																											});
									});
								}
							}	
							else{
								fs.readFile('pasteles.txt', (error,content) => {
									console.log(content.toString());
									rl.close();
								});
							}
						}
						else{
							console.log('No cakes');
						}		
					});
				}
			}
		}
	});
}

rl.on('close', () => {
	console.log("\n¡Bye!");
	process.exit();
});

list();