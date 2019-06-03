import * as React from 'react'

import Nav from './Nav'

const Header = (props: any) => {

  return (
    <header>
      <Nav {...props} />
    </header>
  )
}

export default Header