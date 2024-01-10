---
title: Submit multiple values form the a single field in a single HTML Form
date: '2024-01-10T22:57:48.284Z'
description: 'How to submit multiple values form the a single field in a single HTML Form?'
tags: 'HTML'
---

## Submit multiple values form the a single field in a single HTML Form

Here is the code exemple:

```html
<form action="https://some-url.com" method="POST">
	<!-- You can add as many as fields as you need -->
	<!-- the type="hidden" is not required it can be any type you want -->
	<input type="hidden" name="option[]" value="my first option" />
	<input type="hidden" name="option[]" value="my second option" />

	<input type="submit" value="Send" />
</form>
```
