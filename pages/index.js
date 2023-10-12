import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Form from '../components/Form'
import Account from '../components/Account'
// import '../pages/store';
export default function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <Form/>
      <Account/>
    </div>
  )
}
