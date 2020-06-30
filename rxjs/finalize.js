const { of } = require('rxjs');
const { map, finalize } = require('rxjs/operators');

const nums = of(1, 2, 3);

nums.pipe(
  map(x => x * x),
  finalize(() => console.log('finalize will run after subscribe finish'))
).subscribe(
  x => console.log(x)
) 

// 1
// 4
// 9 
// finalize will run after subscribe finish
