import * as React from 'react'

import { FETCH_PATCH } from '../../store/fetch'

const { useEffect, useState } = React

const Edit = ({ State, Dispatch }: any) => {
  let { isShowEdit, cartoonfold } = State

  const [foldValue, setFold] = useState(cartoonfold)

  useEffect(() => {
    setFold(cartoonfold)
  }, [cartoonfold])

  const saveFold = async () => {
    let saveData = await FETCH_PATCH({ type: 'save', value: foldValue })
    let {
      state,
      data: {
        writeState
      }
    } = saveData

    if(!state && writeState === 'success'){
      // Dispatch
      alert('success')
    }
  }

  return (
    <>
      <div className="form-group">
        <label>本地路径:</label>
        <input type="text" className="form-control" value={foldValue} onChange={e => setFold(e.target.value)} placeholder="" />
      </div>
      <button type="button" className="btn btn-primary" onClick={saveFold} >保存</button>
    </>
  )
}

export default Edit
