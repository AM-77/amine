---
title: flat(depth) and flatMap(fn)
date: '2023-06-23T13:50:13.284Z'
description: 'How to use flat(depth) and flatMap(fn) to Flatten Arrays in JavaScript'
tags: 'JavaScript'
---
## What are `flat(depth)` and `flatMap(fn)`

`flat(depth)` and `flatMap(fn)` are two array methods introduced in ES2019 used to flatten arrays, they create a new array with all the items of all the sub-arrays concatenated into one array.

> Note: `flat(depth)` and `flatMap(fn)` are a copying methods, they do not modify `this`.

## How to use `flat(depth)`?

`flat(depth)`: flatten an array.

Here are some examples on how to use the `flat(depth)` and the expected results:

`depth`: represents how deep a nested array structure should be flattened.

```JavaScript

  const array1 = [1, 2, [3, 4, 5, 6], [7, 8, 9], [10]];
  array1.flat();  // depth is optional, default = 1
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const array2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  array2.flat();
  // [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]]

  const array3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  array3.flat(2);
  // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]

  const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
  array4.flat(Infinity);
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```

## How to use `flatMap(fn)`?

`flatMap(fn)`: execute a mapping function on every element and flatten the result.

Here are some examples on how to use the ``flatMap(fn)`` and the expected results:

`fn`: a function to execute for each element in the array, its called with this args `arr.flatMap(fn(item, index, arr))`.

```JavaScript

  const array1 = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
  array1.flatMap((item) => (item[0] + item[1]));
  // [3, 7, 11, 15, 19]

  const array2 = [
    [{id: 1, value: 1}, {id: 2, value: 2}], 
    [{id: 3, value: 3}, {id: 4, value: 4}], 
    [{id: 5, value: 5}, {id: 6, value: 6}]
  ];
  array2.flatMap((item) => item.map((i) => i.value));
  // [1, 2, 3, 4, 5, 6]

```

<br /><br />


> Here you can find the list of all browsers that support these functions [Can I Use flat?](https://caniuse.com/array-flat)
