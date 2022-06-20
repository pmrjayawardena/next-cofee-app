import React from 'react';
import styles from './Banner.module.css';
export default function Banner(props) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Cofee</span> <span className={styles.title2}>Shop</span>
			</h1>
			<p className={styles.subTitle}>Discover your local cofee shops</p>
			<div className={styles.buttonWrapper}>
				<button className={styles.button} onClick={props.handleOnClick}>
					{props.buttonText}
				</button>
			</div>
		</div>
	);
}
