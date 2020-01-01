
module.exports = { 

	//function returns an array of the data
	getData: function(){
		const fs = require('fs') 

		var boxes = [[],[],[],[],[],[]];

		try {  
		    var data = fs.readFileSync(__dirname + '/../data/CountryBoundingBoxes.txt', 'utf8');
		    var temp = data.toString().split('\n');

		    for (var i = 0; i < temp.length; i+=6) {

		    	for (var k = 0; k < 6; k++) {
		    		boxes[k].push(temp[i+k]);
		    	}

			}

		} catch(e) {
		    console.log('Error:', e.stack);
		}

		return boxes;
	}
}