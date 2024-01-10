---
title: Read and write searchParams in NextJS 13
date: '2024-01-10T22:02:22.284Z'
description: 'How to read and write searchParams in NextJS 13, in both client side and server side'
tags: 'NextJS'
---

## Read searchParams

- Client Side

```javascript
'use client';

import { useSearchParams } from 'next/navigation';

export default function MyComponent() {
	const searchParams = useSearchParams();

	const a = searchParams.get('a');
	const b = searchParams.get('b');

	return (
		<>
			Search Params: a: {a}, b: {b}
		</>
	);
}
```

- Server Side

```javascript
import React from 'react';

const MyPage = async (props) => {
	const {
		searchParams: { a, b }
	} = props;

	return (
		<>
			Search Params: a: {a}, b: {b}
		</>
	);
};

export default MyPage;
```

## Write searchParams

- Client Side

```javascript
'use client';
import React from 'react';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const MyComponent = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const onClick = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('a', 'a_value');
		params.set('b', 'b_value');

		router.push(`${pathname}?${params}`);
	};

	return <button onClick={onClick}>Click Here</button>;
};

export default MyComponent;
```

- Server Side

```javascript
import React from 'react';

import Link from 'next/link';

const MyPage = async () => {
	return <Link href="/?a=a_value&b=b_value" />;
};

export default MyPage;
```
