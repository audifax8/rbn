import React from 'react';
import { useSelector } from 'react-redux';

import { IAppState } from '@/constants';
import { useRXC } from '@/providers/rxc';

import Icon from '../common/icon';
import style from './rxc.module.css';

export default function RXCButton() {
  const { rxcReady, product: { name, vendorId} } = useSelector((state: IAppState) => state.app);
  const { rxcService } = useRXC();
  async function rxcOnClick() {
    await rxcService?.renderRxc(vendorId, name);
  }
  return (
    <button
      className={`${style.rxcButton}  ${!rxcReady ? style.disabled : ''}`}
      disabled={!rxcReady}
      onClick={rxcOnClick}
    >
      <Icon src='/rxc.svg' alt='virtual mirror icon' width={18} height={18} />
      <span className={style.rxcLabel}>try lenses</span>
    </button>
  );
};