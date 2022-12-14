import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { api } from "../services/api";
import styles from '../styles/Home.module.css'
import React, { useState } from "react";

const Home: NextPage = () => {

  const [enteredText, setEnteredText] = useState("");
  const [products, setProducts] = useState([]);
  const [productgroups, setProductgroups] = useState([]);

  let timeout: any;


  const slugify = (str: any) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');


  return (
    <div className={styles.container}>
      <Head>
        <title>Baas Verpakkingen B.V.</title>
        <meta name="description" content="Generated by create bext app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Demo and assignmentproject</h3>
        <p>
          Please implement the product or productgroup page from the _tpl directory. And / or read the readme file.
        </p>
      </main >
      <footer className={styles.footer}></footer>
    </div >
  )
}

export default Home
