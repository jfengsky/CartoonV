import * as React from 'react'

import Edit from './Edit'
import Cartoons from './Cartoons'

const Main = ({ State, Dispatch }: any) => {
  let { isShowEdit } = State
  return (
    <main>
      {isShowEdit && <Edit State={State} Dispatch={Dispatch} />}
      {!isShowEdit && <Cartoons State={State} Dispatch={Dispatch} />}
    </main>
  )
}

export default Main