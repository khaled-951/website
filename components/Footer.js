import styles from '../styles/Footer.module.css'

export default function Footer(){
    return <div className={styles.test} >
        <div className={styles.firstOrangeLine} ></div>
        <div className={styles.secondOrangeLine} ></div>
        <div className={styles.secondBlueLine} ></div>
        <div className={styles.firstBlueLine} ></div>
        All rights reserved
    </div>;
}