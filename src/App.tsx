import * as React from 'react'
import Header from './components/header'
import Main from './components/main'
import Modal from './components/modal'

import initalState from './store/initalState'
import reducer from './store/reducer'

import { FETCH_PATCH, FETCH_FOLD } from './store/fetch'
import { filterTempFile } from './store/filter'

const { useReducer, useEffect } = React

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const { cartoonfold, breadcrumb } = state
  useEffect(() => {
    const getPatch = async () => {
      const fetchData = await FETCH_PATCH({ type: 'get' })
      let {
        data: {
          cartoonfold,
          readed,
          last
        },
        state: st
      } = fetchData
      if (!st) {
        dispatch({
          type: 'updataInit', value: {
            cartoonfold,
            readed,
            last
          }
        })
      }
    }
    getPatch()
  }, [])

  useEffect(() => {
    const changeFold = async (currentFold: string) => {
      const fetchFolds = await FETCH_FOLD({ type: 'getfold', fold: currentFold })

      let {
        state,
        data: folds
      } = fetchFolds

      if (!state) {

        // 排除.DS_Store 和 .localized 两个文件
        let {
          dirList,
          fileList
        } = folds

        let newFileList = filterTempFile(fileList)

        dispatch({
          type: 'updataFold', value: {
            dirList,
            fileList: newFileList
          }
        })
      }

    }
    if (cartoonfold) {
      let currentFold = cartoonfold
      if(breadcrumb){
        currentFold = `${currentFold}/${breadcrumb}`
      }
      changeFold(currentFold)
    }
  }, [cartoonfold, breadcrumb])

  let { isShowModal } = state

  return (
    <section className='container-fluid'>
      <Header State={state} Dispatch={dispatch} />
      <Main State={state} Dispatch={dispatch} />
      {isShowModal && <Modal State={state} Dispatch={dispatch} />}
    </section>
  )
}

export default App