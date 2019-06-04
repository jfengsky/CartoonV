/**
 * 面包屑
 */

import * as React from 'react';

const Breadcrumb = ({ State, Dispatch }: any) => {
  let {
    breadcrumb
  } = State
  return (
    <nav>
      <ol className='breadcrumb' style={{ background: '#fff' }}>
        <li className='breadcrumb-item active'>
          <a href='/'>HOME</a>
        </li>
        {!!breadcrumb && <li className="breadcrumb-item">{breadcrumb}</li>}
      </ol>
    </nav>
  )
}
export default Breadcrumb