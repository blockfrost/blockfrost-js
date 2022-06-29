import React from 'react';
import Link from 'next/link';
import { X } from 'react-feather';

function Menu() {
  return (
    <div id="navbarMenu" className="navbar-menu-wrapper">
      <div className="navbar-menu-header">
        <Link href={'/'} passHref>
          <a className="df-logo">
            block<span>frost</span>
          </a>
        </Link>
        <a id="mainMenuClose" href="">
          <X />
        </a>
      </div>
    </div>
  );
}

export { Menu };
