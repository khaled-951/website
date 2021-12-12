import SignInBar from '../components/SignInBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/signUp.module.css';
import Image from 'next/image';
import react from 'react';
import axios from 'axios' ;
import { useRouter } from 'next/router';

function signup() {
  const router = useRouter();
  const [firstname, setFirstname] = react.useState('');
  const [lastname, setLastname] = react.useState('');
  const [email, setEmail] = react.useState('');
  const [password, setPassword] = react.useState('');
  const [rePassword, setRePassword] = react.useState('');

  const handleLogin = (e) => {
    if(password !== rePassword) alert('Verify Your Inputs Please !');
    axios.post('http://localhost:3000/register', {firstname: firstname, lastname: lastname, email: email, password: password } )
      .then(data => { router.push('/login'); } )
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
    <div className={styles.firstAndLastName} >
      <input type="text" placeholder="First Name*" className={styles.namesStyle} onChange={(e) => {setFirstname(e.target.value)} } ></input>
      <input type="text" placeholder="Last Name*" className={styles.namesStyle} onChange={(e) => {setLastname(e.target.value)} } ></input>
    </div>
    <input type="text" placeholder="Email*" className={styles.inputStyle} onChange={(e) => {setEmail(e.target.value)} } ></input>
    <input type="password" placeholder="Password*" className={styles.inputStyle} onChange={(e) => {setPassword(e.target.value)} } ></input>
    <input type="password" placeholder="Repeat Password*" className={styles.inputStyle}  onChange={(e) => {setRePassword(e.target.value)} }></input>
    <input type="submit" value="Submit" className={styles.submitButton} onClick={(e) => handleLogin(e)} ></input>
  </div>
  <Footer/>
</>
}

export default signup