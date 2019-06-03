import * as React from 'react'
import Header from './components/header'
import Main from './components/main'
// import Modal from './components/modal'

import initalState from './store/initalState'
import reducer from './store/reducer'

const { useReducer } = React

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const { isShowEdit } = state

  return (
    <section className='container-fluid'>
      <Header State={state} Dispatch={dispatch} />
      <Main State={state} Dispatch={dispatch} />
      {/* {isShowEdit && <Modal />} */}
    </section>
  )
}

export default App