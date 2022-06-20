import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function SingleStore() {
	const router = useRouter();
	const { id } = router.query;
	console.log(router.query);
	return (
		<div>
			<Link href='/'>
				<a>Back to Home</a>
			</Link>
		</div>
	);
}
