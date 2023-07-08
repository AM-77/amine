---
title: Detect and prevent tab or window closing with JavaScript
date: '2023-06-21T13:50:13.284Z'
description: 'How to detect and prevent the user from closing the tab or the window using JavaScript'
tags: 'JavaScript'
---
## Why ?

Imagine this scenario: You have a large form that the user needs to fill out. He starts filling out all the fields, then accidentally closes the page, or he forgets to save and navigates to another page. In this case, all his changes will be gone.

It would be great to somehow stop him from leaving the page and ask for his confirmation before clearing all the fields, and that's exactly what we will cover in this post.

## How ?

To achieve that, we can use the `beforeunload` event. As the name indicates, the `beforeunload` event gets fired just before the document or the window is unloaded, which gives the possibility to run some code before the unload asking for the user's confirmation to prevent the closing or discarding his work.

the code 

```JavaScript
window.addEventListener("beforeunload", (e) => {
  const confirmationMessage = "\\o/";

  // Gecko + IE
  (e || window.event).returnValue = confirmationMessage;

  // Safari, Chrome, and other WebKit-derived browsers
  return confirmationMessage;
});
```

for more details please check the MDN Web Doc here [Window: beforeunload event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)


> Please use this wisely; it is super annoying to prevent the user from navigating freely in the application.