import React from 'react';

import Icon from '../common/icon';
import style from './header.module.css';

export default function Header() {
  return (
    <div className='rbn-header'>
      <div className={style.flex}>
        <div className='fc-custom-rbn-logo'>
          <Icon src='/rbn-logo.svg' alt='RBN logo' width={73} height={32} />
        </div>
        <div className={style.hmMenu}>
          <Icon src='/hm-menu.svg' alt='menu icon' width={28} height={12} />
        </div>
      </div>
    </div>
  );
}

/*

<div className={style.flex}>
        <div className='fc-custom-model-name'>
          <h1 className={style.productName}>{ name }</h1>
        </div>
        <div className='fc-custom-vm'>
          <VMButton></VMButton>
        </div>
      </div>
      */