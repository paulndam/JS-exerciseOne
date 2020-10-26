let result = 1;
for (let counter = 0; counter < 10; counter++) {
  result *= 2;
}
console.log (result);

for (let x = '*'; x.length < 10; x += '*') {
  console.log (x);
}

// fizzbuzz

for (let x = 1; x < 100; x++) {
  if (x % 3 === 0) {
    console.log (x + ' ==> ' + ' fizz ');
  } else if (x % 5 === 0) {
    console.log (x + ' ===> ' + 'buzz');
  } else console.log (x);
}

let size = 8;
let board = '';
for (x = 0; x < size; x++) {
  for (y = 0; y < size; y++) {
    if ((x + y) % 2 === 0) {
      board += '  ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log (board);

// const prompt = require ('prompt-sync') ();

// switch (prompt ('what is the socre in game, Man-U vs Chelsea')) {
//   case ' one to null':
//     console.log ('i bet man u is winning');
//     break;
//   case ' one to one ':
//     console.log ('the game is tight for now');
//     break;
//   default:
//     console.log ('i never asked you about the score mate !!');
// }

// const readline = require ('readline');
// const rl = readline.createInterface ({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question ('What is your name ? ', function (name) {
//   rl.question ('Where do you live ? ', function (country) {
//     rl.question ('what league', function (league) {
//       console.log (
//         `${name}, is a citizen of ${country} and he likes ${league}`
//       );
//       rl.close ();
//     });
//   });
// });

// rl.question ('try this', function (division) {
//   let x = 3;
//   if (x % 15 === 5) {
//     console.log (`fizzzzzz ${division}`);
//   }
// });

// rl.on ('close', function () {
//   console.log ('\nBYE BYE !!!');
//   process.exit (0);
// });

// const name = prompt ('weti be your name');
// console.log (`sup ${name}, how far my guy`);

// switch (prompt ('what is your favorite soccer league ? ')) {
//   case 'premier league':
//     console.log ('that is the big league right there');
//     break;

//   case 'serie':
//     console.log ('i guess you like it because ronaldo is there right !!');
//     break;

//   default:
//     console.log ('unknow leagued asked ');
// }
