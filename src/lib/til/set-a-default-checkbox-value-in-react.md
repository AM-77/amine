---
title: Set A Default Checkbox Value in React
date: '2023-06-23T13:50:13.284Z'
description: 'How to Set A Default Checkbox Value in React'
tags: 'React'
---
## The `defaultChecked` prop

> defaultChecked: A boolean. Specifies the initial value for type="checkbox" and type="radio" inputs.

to set a default checkbox value you need to use the `defaultChecked` prop, because using the `checked` without an onChange handler, will render an read-only checkbox.

> You provided a checked prop to a form field without an onChange handler. This will render a read-only field. If the field should be mutable use defaultChecked. Otherwise, set either onChange or readOnly.



## Use case

Here is an exemple on how the `defaultChecked` prop can be used:

```JavaScript
<input type="checkbox" defaultChecked={something} />
```
