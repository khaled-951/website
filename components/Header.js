import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header(){
    return <div className={styles.backgroundAndAlignment} >
        <span className={styles.buttons}>
            <span className={styles.logo} >
                <div className={styles.firstOrangeLine} ></div>
                <div className={styles.secondOrangeLine} ></div>
                <div className={styles.secondBlueLine} ></div>
                <div className={styles.firstBlueLine} ></div>
            </span>
            <Link href="/"><a>Home</a></Link>
            <Link href="#"><a >About Us</a></Link>
            <Link href="#"><a >Contact</a></Link>
        </span>
        <span className={styles.roundButton} >Ar</span>
    </div>;
}