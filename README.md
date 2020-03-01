# array-concat-sum 

Concat number values of two arrays for the position, ignoring null ou invalid values.

## Installation

```
npm install array-concat-sum
```

## Use example

```
const concat = require('array-concat-sum');

var newArray = concat([1,2,3],[3,2,1]);

'The result is [4,4,4]'

```
## Use example (With Not Numbers)

```
const concat = require('array-concat-sum');

var newArray = concat([1,2,3,5,"test"],[3,2,1,null]);

'The result is [4,4,4,5]'

```

### Work for future versions: 

> Concat in one parameter a array of arrays.