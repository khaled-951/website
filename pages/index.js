import { useEffect } from 'react'
import SignInBar from '../components/SignInBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  useEffect( () => {
      if(localStorage.getItem('authToken') === null)
        router.push('/login');
    },[]);

  return <>
    <SignInBar/>
    <Header/>
    <div className={styles.test}>
      <div className={styles.logo} >
        <div className={styles.firstOrangeLine} ></div>
        <div className={styles.secondOrangeLine} ></div>
        <div className={styles.secondBlueLine} ></div>
        <div className={styles.firstBlueLine} ></div>
      </div>
      This Logo Above Is Made In Pure CSS
    </div>
    <Footer/>
  </>
}

export default Home