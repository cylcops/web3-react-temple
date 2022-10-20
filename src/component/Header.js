import * as React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BsFillLightningFill } from 'react-icons/bs';

function Header() {
  return (
    <div class="box-border border-8 border-transparent">
      <div class="navbar rounded-xl bg-primary text-primary-content">
        <div class="navbar-start">
          <a class="btn btn-ghost normal-case text-xl">
            <BsFillLightningFill></BsFillLightningFill>
            <span class="ml-3 ">ZEUS</span>
          </a>
        </div>
        <div class="navbar-end">
          <ConnectButton></ConnectButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
