import * as React from 'react'

import Edit from './Edit'

const Main = ({ State, Dispatch }: any) => {
  let { isShowEdit } = State
  return (
    <main>
      {isShowEdit && <Edit State={State} Dispatch={Dispatch} />}
    </main>
  )
}

export default Main