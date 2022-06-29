import React from 'react';

function Footer() {
  return (
    <footer className="footer d-flex align-items-end">
      <div className="d-flex flex-column" style={{ height: 70 }}>
        <div>
          <strong>Blockfrost.io</strong>, Five Binaries OÜ, Sepapaja 6, 11415
          Tallinn, Estonia
        </div>
        <div className="d-flex mt-3">
          makes it easy to enter the Cardano ecosystem by providing an instant
          API access to the blockchain. <br />
          Developers adoption is our primary goal.
        </div>
      </div>
      <div className="d-flex align-items-start">
        <div>© {new Date().getFullYear()} Five Binaries OÜ</div>
      </div>
    </footer>
  );
}

export { Footer };
