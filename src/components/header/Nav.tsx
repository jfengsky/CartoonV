import * as React from 'react'

const Nav = ({ State, Dispatch }: any) => {
  
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className="navbar-brand" href="/">CartoonV</a>
      <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
          <a href='#edit' className='nav-item nav-link active' onClick={() => Dispatch({ type: 'showEdit' })}>编辑</a>
          <a href='javascript:;' className='nav-item nav-link'>...</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav