import styles from '../styles/SignInBar.module.css'
import Link from 'next/link'

function SignInBar(){

    return <div className={styles.backgroundAndAlignment} >
        <Link href="/login"><a className={styles.buttons}>SignIn</a></Link>
        <Link href="/signup"><a className={styles.buttons}>SignUp</a></Link>
        </div>
}

export default SignInBar ;