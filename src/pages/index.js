import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from 'react-plaid-link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bulwark Wealth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Bulwark Wealth</a>
        </h1>

        <p className={styles.description}>
          Getting started is easy. Our partner Plaid will allow us to aggregate your assets for analysis. Using Plaid we can connect to your financial institutions without ever having access to your credentials. Your security is of upmost importance to us
        </p>

        <div className={styles.grid}>
          <Link className={styles.card} href="portfolio">
            <h3>Portfolio &rarr;</h3>
            <p>
              How are you allocatted and how have you performed
            </p>
            </Link>


          <a
            href="risk"
            className={styles.card}
          >
            <h3>Bulwark Risk Analysis &rarr;</h3>
            <p>Discover how your portfolio will perform in challenging environments and what risks you may not be aware of</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Stock Insights &rarr;</h3>
            <p>
              What does the market say about a stock's value and how will it fit into your overall strategy
            </p>
          </a>
        </div>
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
