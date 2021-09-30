import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Post | ignews</title>
      </Head>

      <main className={ styles.container }>
        <div className={ styles.posts }>
          <a href="#">
            <time>30 de setembro de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
          <a href="#">
            <time>30 de setembro de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
          <a href="#">
            <time>30 de setembro de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
        </div>
      </main>
    </>
  );
}
