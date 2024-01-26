---
title: Access the URL in NextJS 13
date: '2024-01-10T22:02:22.284Z'
description: 'How to access the URL in NextJS 13, in both client side and server side'
tags: 'NextJS'
---

## Client Side

this is strightforward, you can just access the `window.location.href` or using the hooks

```javascript
'use client';
import React from 'react';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const MyComponent = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	React.useEffect(() => {
		console.log({ url: window.location.href });
	}, []);

	return <p>Client Side</p>;
};

export default MyComponent;
```

## Server Side

for the server side is a bit tickier, as there is no strightforward way to access the url, instead you need to set the url into the headers, than you retieve it from the headers when you want to use it.

in the `middleware.js`, you set the url to the headers

```javascript
import { NextResponse } from 'next/server';

export async function middleware(request) {
	const headers = new Headers(request.headers);
	headers.set('x-url', request.url);

	return NextResponse.next({ headers });
}
```

in the component:

```javascript
import React from 'react';
import { headers } from 'next/headers';

export const MyComponent = () => {
	const headersList = headers();
	const xurl = headersList.get('x-url');

	return <p>Server Side</p>;
};

export default MyComponent;
```
