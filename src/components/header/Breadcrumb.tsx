/**
 * 面包屑
 */

import * as React from 'react';

const Breadcrumb = ({ State, Dispatch }: any) => {

  return (
    <nav>
      <ol className='breadcrumb' style={{background: '#fff'}}>
        <li className='breadcrumb-item active'>
          <a href='#'>HOME</a>
        </li>
        <li className="breadcrumb-item">Library</li>
      </ol>
    </nav>
  )
}
export default Breadcrumb