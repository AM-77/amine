---
title: Check if value is an array in JavaScript
date: '2024-01-22T08:07:00.284Z'
description: 'How to check is a value is an array in JavaScript?'
tags: 'JavaScript'
---

## `Array.isArray(val)` is what you are looking for

You might think of using `typeof []` would do the job and return "`array`", but thats not true, becuase in JavaScript all _Non-primitive_ data types are of type "`object`", so we will another way to check the type of an array, and that's where `Array.isArray()` shine.

```JavaScript
 const arr = [1, 2, 3];
  typeof arr; // 'object'
  Array.isArray(arr);  // true

  const text = "some text";
  typeof text; // 'string'
  Array.isArray(text);  // false

  const obj = { a: 1, b: 2 };
  typeof obj; // 'object'
  Array.isArray(obj);  // false

```
