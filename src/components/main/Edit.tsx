import * as React from 'react'

const { useEffect } = React

const Edit = ({ State, Dispatch }: any) => {
  let { isShowEdit } = State

  useEffect(()=>{
    const saveData = async () => {

    }
  }, [])

  return (
    <>
      <div className="form-group">
        <label>本地路径:</label>
        <input type="email" className="form-control" placeholder="" />
      </div>
      <button type="button" className="btn btn-primary">保存</button>
    </>
  )
}

export default Edit