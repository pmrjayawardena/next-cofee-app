import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cofeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
	const { params } = staticProps;

	return {
		props: {
			cofeeStore: cofeeStoresData.find(
				(store) => store.id.toString() === params.id
			),
		}, // will be passed to the page component as props
	};
}

export function getStaticPaths() {
	return {
		paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
		fallback: false, // false (404 page) or 'blocking'
	};
}

export default function SingleStore(props) {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			<Link href='/'>
				<a>Back to Home</a>
			</Link>
			<p>{props.cofeeStore.name}</p>
			<p>{props.cofeeStore.address}</p>
		</div>
	);
}
