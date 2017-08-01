# safenav

safenav is a node.js module that allows to use safe navigation through properties


## Installation
`npm install safenav`

## Usage

	var safenav = require('safenav');

	var obj ={
		p1: {
			p2: {
				p3: 123
			}
		}
	};

	var p3 = safenav(obj)(x => x.p1.p2.p3);
	console.log(p3); //prints 123
	
	var wrongPropertyName = safenav(obj)(x => x.wrong.property.name);
	console.log(wrongPropertyName); //prints undefined
	
Also, default object is allowed:

	var defaultValue = safenav(obj, false)(x => x.wrong.property.name);
	console.log(defaultValue); //prints false
