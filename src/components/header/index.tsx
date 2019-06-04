import * as React from 'react'

import Nav from './Nav'
import Breadcrumb from './Breadcrumb'

const Header = (props: any) => {

  return (
    <header>
      <Nav {...props} />
      <Breadcrumb {...props} />
    </header>
  )
}

export default Header