import React, { ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import { Layout, Assets } from 'components';

function Index(): ReactElement {
  return (
    <Layout title="Blockfrost.io">
      <div
        className="100-vw"
        style={{ height: '100%', display: 'flex', flex: 1 }}
      >
        <div className="notification">
          Please add the PROJECT_ID env and restart the app. See:
          <a
            className="link"
            href="https://github.com/blockfrost/blockfrost-demo-asset-explorer"
          >
            https://github.com/blockfrost/blockfrost-demo-asset-explorer
          </a>
        </div>
        <Container className="content-fixed">
          <Assets />
        </Container>
      </div>

      <style jsx>{`
        .notification {
          position: absolute;
          width: 100%;
          z-index: 99999;
          height: 50px;
          align-items: center;
          top: 50px;
          background: #dc3545;
          padding: 10px 25px;
          color: white;
          display: ${!process.env.PROJECT_ID ||
          process.env.PROJECT_ID === 'YOUR_PROJECT_ID'
            ? 'flex'
            : 'none'};
        }
        .link {
          color: white;
          text-decoration: underline;
          font-weight: 500;
          padding-left: 5px;
        }
      `}</style>
    </Layout>
  );
}

export default Index;
