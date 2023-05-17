//const fs = require('fs');
//const { mainModule } = require('process');
//
//fs.writeFile(
//    '.hello.txt', 
//  'Hello',
//    function() {
//        console.log('done creating file');
//    }
//    )

//const daysOfWeek = require('./days-of-week');

//const day = daysOfWeek.getWeekday(3);
//console.log(day);

const random = require('./random');

const finalNum = random.numGenerator(100, 1);
console.log(finalNum);