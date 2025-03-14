import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';

import { IAppState, RenderType } from '@/constants';

import Header from '@/components/header';
import Model from '@/components/model';
import Loader from '@/components/loader';
import Menu from '@/components/menu';

import Scripts from '../scritps';
import style from './index.module.css';

export default function App() {
  const searchParams = useSearchParams();
  const useFullImage = searchParams.get('useFullImage') === 'true';
  const {
    configureReady, browserData
  } = useSelector((state: IAppState) => state.app);

  const getMobileStyles = () => {
    let styles: any = {
      background: 'linear-gradient(187deg, #ADABAB 3.45%, #E1E1E1 22.56%, #F2F1F1 41.67%, #E7E7E7 60.77%, #C3C1C1 79.88%)',
      display: 'flex',
      gap: '0.5em'
    }

    if (browserData && browserData.mobile) {
      const rbnHeaderHeight = document.querySelector('.rbn-header')?.clientHeight || 0;
      let windowInnerHeight = document.documentElement.clientHeight;

      if (window.devicePixelRatio && window.devicePixelRatio > 1.1) {
        windowInnerHeight = windowInnerHeight - 1;
      }

      styles = {
        'flex-direction': 'column',
        height: (windowInnerHeight - rbnHeaderHeight),
        ...styles
      };
    }
    return styles;
  };

  const { row } = style;
  return (
    <>
      <Scripts/>
      <Header />
      {!configureReady && useFullImage && <Loader />}
      {
        <section style={getMobileStyles()}>
          <section className={row}>
            <Model />
          </section>
          <section className={row}>
            <Menu />
          </section>
        </section>
      }
    </>
  );
}
