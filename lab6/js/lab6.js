
//PUT YOUR FUNCTIONS UP HERE
function addToWebPage(text)
{
	document.querySelector('#content').innerHTML += text + '<br /><br />'
}

function formatNames (arrayOfNames) {
	let personNames;
	personNames = splitNames = arrayOfNames[1].split(' ');
	firstName = splitNames[0];
	lastName = splitNames[1];
	fixedName = lastName + ', ' + firstName;
	return 	newArray.push(fixedName);
}

//YOU CAN ADD MORE FUNCTIONS HERE

//END FUNCTIONS SECTION

function formatAndSortNames() {

	let arrayOfNames, splitNames, firstName, lastName, fixedName,
		finalName, combinedString, newArray, combinedFixedString;

	arrayOfNames = ["Kizzmekia Corbett", "Ada Lovelace", "Levar Burton" ];

	//Reminder: Google what "javscript pop" does if you do not remember!
	finalName = arrayOfNames.pop();
	//Reminder: Google what "join" does!
	combinedString = arrayOfNames.join('; ');
	combinedString = combinedString + ' and ' + finalName;

	addToWebPage('Before, the names were: ' + combinedString);


	newArray = [];

	//Remember to Google what "split" does

	newArray.sort();
	finalFixedName = newArray.pop();
	//Reminder: Google what "join" does!
	combinedFixedString = newArray.join('; ');
	combinedFixedString = combinedFixedString + ' and ' + finalFixedName;

	addToWebPage('Afterwards, the names are: ' + combinedFixedString);

}
