import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Domov" description="Dokumentácia tímu 20">
    <main style={{ padding: '6rem 2rem', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3rem' }}>Tím 20</h1>
    <p style={{ fontSize: '1.25rem' }}>
    Dokumentácia, architektúra a zápisy zo stretnutí.
    </p>
    <Link className="button button--primary button--lg" to="/docs/category/meetings">
    Zápisy zo stretnutí
    </Link>
    </main>
    </Layout>
  );
}
