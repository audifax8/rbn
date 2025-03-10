import React, { useCallback } from 'react';

import style from './category.module.css';

interface IAttributeValuePropTypes {
  onClick: Function;
  selected: boolean,
  id: number;
  name: string;
  vendorId: string;
};

function Category(props: IAttributeValuePropTypes) {
  const { id, name, onClick, selected, vendorId } = props;

  const memoizedClick = useCallback(
    (e: any) => {
      console.log('click: ' + vendorId);
      e?.preventDefault();
      if (onClick) {
        return onClick.call(null, id);
      }
    },
    []
  );
  return (
    <li key={id} className={style.li}>
      <button onClick={memoizedClick} key={id}>
        <div className={`${style.category} ${selected ? style.selected : ''}`}>
          <span id={vendorId} className={style.label}>{name}</span>
        </div>
      </button>
    </li>
  );
};

export default Category;
