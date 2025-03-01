import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Syndeca from "../components/syndeca";
import Link from "next/link";

export default function Viewer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/campaign">Campaign</Link></li>
            <li><Link href="/viewer">Born to Shine</Link></li>
            <li><Link href="/viewer2">Western</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/product">Product</Link></li>
          </ul>
        </div>

        <h1 className={styles.title}>
          Western Wear Syndeca Viewer
        </h1>
        <Syndeca catalogKey={'girls-western-wear'}></Syndeca>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
