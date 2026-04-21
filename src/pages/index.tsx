import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/intro">
            REST API Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/sdk/intro">
            Mobile SDK Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Appfastfly Documentation"
      description="Official documentation for Appfastfly REST API and Mobile SDK">
      <HomepageHeader />
      <main>
        <div className="container" style={{ padding: '4rem 0' }}>
          <div className="row">
            <div className="col col--6">
              <div className="card" style={{ height: '100%' }}>
                <div className="card__header">
                  <h3>REST API</h3>
                </div>
                <div className="card__body">
                  <p>
                    Programmatically interface with your Appfastfly service. Manage short links, create deep linking rules dynamically, and read click analytics data using conventional RESTful structures.
                  </p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to="/docs/api/intro">View API</Link>
                </div>
              </div>
            </div>
            <div className="col col--6">
              <div className="card" style={{ height: '100%' }}>
                <div className="card__header">
                  <h3>Mobile SDK (React Native)</h3>
                </div>
                <div className="card__body">
                  <p>
                    Integrate deferred deep linking into your React Native applications. Leverage fingerprinting to route users from a web link, through the App Store, and directly into the exact content block within your app.
                  </p>
                </div>
                <div className="card__footer">
                   <Link className="button button--primary button--block" to="/docs/sdk/intro">View SDK</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
