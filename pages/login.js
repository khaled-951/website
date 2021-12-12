import SignInBar from '../components/SignInBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/login.module.css' ;
import Image from 'next/image';
import react from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

function login() {
  const router = useRouter();
  const [email, setEmail] = react.useState("");
  const [password, setPassword] = react.useState("");

  const handleLogin = (e) => {
    axios.post('http://localhost:3000/login', {email: email, password: password } )
      .then(data => { localStorage.setItem('authToken', data.data); router.push('/'); } )
      .catch(data => alert('Verify Your Inputs Please !'));
  }

  return <>
  <SignInBar/>
  <Header/>
  <div className={styles.test} >
    <table>
        <tr>
          <th className={styles.tableText} >
            <div className={styles.checkedStyle}><Image src="/checked.png" width="30" height="30" alt="Checked Icon" ></Image></div>
            <Image src="/register.jpg" width="20" height="20" alt="Register Icon" ></Image>
            <div>Register</div>
            <div className={styles.Text} >Browse and find what you need.</div>
          </th>
          <td className={styles.tableText}>
            <Image src="/login.png" width="20" height="20" alt="Login Icon" ></Image>
            <div>Sign In</div>
            <div className={styles.Text} >Already have an account, then welcome back.</div>
          </td> 
        </tr>
    </table>
    <input type="text" placeholder="Email*" className={styles.inputStyle} onChange={(e) => {setEmail(e.target.value)} } ></input>
    <input type="password" placeholder="Password*" className={styles.inputStyle} onChange={(e) => {setPassword(e.target.value)} } ></input>
    <input type="submit" value="Submit" className={styles.submitButton} onClick={(e) => handleLogin(e)} ></input>
  </div>
  <Footer/>
</>
}

export default login