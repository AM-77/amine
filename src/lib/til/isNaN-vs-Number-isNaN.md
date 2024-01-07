---
title: isNaN() vs Number.isNaN() in JavaScript
date: '2024-01-07T14:24:13.284Z'
description: 'What is the difference Between isNaN() and Number.isNaN()?'
tags: 'JavaScript'
---

## What is the global `NaN`  

`NaN` is a property of the __global object__ that represents a Not-A-Number.

## What is `isNaN(value)`

a function that checks if `value` is `NaN` after trying converting it to a number.

## What is `Number.isNaN(value)`

a static method of the `Number` class determines whether the passed `value` is the number value `NaN`

## The difference

the main difference is that `isNaN` try to converts the passed `value` to a number then checks if it is `NaN`, while the `Number.isNaN()` check the passed `value` as it is, so non-numbers always return `false`.

examples:

```JavaScript

isNaN('test'); // true // it trys to convert "test" to a number returns NaN then check if the converted value is NaN
Number.isNaN('test'); // false  // check directly if the converted value is NaN

// value is NaN
isNaN(NaN); // true
Number.isNaN(NaN); // true

// value is undefined
isNaN(undefined); // true
Number.isNaN(undefined); // false

// value is null
isNaN(null); // false // is coerced to 0
Number.isNaN(null); // false

// value is a boolean
isNaN(true); // false // is coerced to 1
Number.isNaN(true); // false

// value is a boolean
isNaN(false); // false // is coerced to 0
Number.isNaN(false); // false

// value is an object
isNaN({}); // true
Number.isNaN({}); // false

// value is a number
isNaN(37); // false
Number.isNaN(37); // false

// value is a date
isNaN(new Date()); // false // coerced to a number (timestamp)
Number.isNaN(new Date()); // false

// value is "NaN"
isNaN("NaN"); // true // coerced to NaN
Number.isNaN("NaN"); // false

// value is empty string
isNaN(" "); // false // coerced to 0
Number.isNaN(" "); // false

// value is empty array
isNaN([]); // false // coerced to 0
Number.isNaN([]); // false

```

> `Number.isNaN` is a more safe and robust version of `isNaN`.

You can find more details:

[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

[isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

[Number.isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
