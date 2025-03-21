import React from 'react';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { IAppState, IAttributeValue, ICAMap, IConfigurableAttribute } from '@/constants';
import { useConfigure } from '@/providers/configure';

import style from './menu.module.css';

import AttributeHeader from './components/attribute-header';
import CaSeparator from './components/ca-separator';
import RXCButton from '../RXC';

export default function Menu() {
  const { configureService } = useConfigure();
  const casToMap: ICAMap[] = [
    {
      id: null,
      alias: 'frame_sku',
      icon: 'frame',
      selectedAvId: null
    },
    {
      id: null,
      alias: 'lenses_sku',
      icon: 'lens',
      selectedAvId: null
    },    
    {
      id: null,
      alias: 'temple_tips_sku',
      icon: 'temple',
      selectedAvId: null
    },
    {
      id: null,
      alias: '',
      icon: 'temple',
      selectedAvId: null
    }
  ];

  function mapCas(): ICAMap[] {
    const sanitizedCas = casToMap.map(
      (ca: ICAMap) => {
        const { alias } = ca;
        try {
          const configurableAttibute = configureService.getAttributeByAlias(alias);
          const av = configureService.getSelectedAV(alias)
          if (configurableAttibute) {
            return {
              ...ca,
              id: configurableAttibute.id,
              selectedAvId: av.id
            };
          }
        } catch (e) {
          return undefined;
        }
      }
    ) as ICAMap[];
    return sanitizedCas.filter((ca: ICAMap) => ca);
  };

  const [casToRender, setCasTorender] = useState<ICAMap[]>(mapCas());
  const { renderMenu, rxcReady } = useSelector((state: IAppState) => state.app);

  useEffect(() => {
    if (renderMenu) {
      const sanitizedCas = mapCas();
      setCasTorender(sanitizedCas);
    }
  },
  [renderMenu]);

  async function click(data: { ca: IConfigurableAttribute, av: IAttributeValue }) {
    const { ca, av } = data;
    const options = {
      ca: { alias: ca.alias },
      av: { id: av.id }
    };
    await configureService.selectValue(options);
    setCasTorender(mapCas());
  };

  return (
    <>
      {rxcReady && <div><RXCButton /></div>}
      <div id="#rxcApp" className='rxcApp'></div>
      <section className={style.menu}>
        <ul className={style.caSeparator}>
        {casToRender.length &&
          casToRender.map(
            (caInfo: ICAMap, index: number) => {
              return (
                <li key={caInfo.id}>
                  <AttributeHeader caInfo={caInfo} onClick={click} key={caInfo.id}/>
                  {(index < (casToRender.length - 1)) && <CaSeparator />}
                </li>
              );
          })
        }
        </ul>
      </section>
    </>
  );
};