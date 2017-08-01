# safenav

safenav is a node.js module that allows to use safe navigation through properties


## Installation
`npm install safenav`

## Usage

	var safenav = require('safenav')

	var obj ={
		p1: {
			p2: {
				p3: 123
			}
		}
	}

	console.log(safenav(obj)(x => x.p1.p2.p3)); //prints 123
	
	console.log(safenav(obj)(x => x.wrong.property.name)); // prints undefined
	
Also, default object is allowed:

	console.log(safenav(obj, false)(x => x.wrong.property.name)); // prints false
