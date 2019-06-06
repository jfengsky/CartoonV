/**
 * 漫画目录
 */

import * as React from 'react'
import { FETCH_SAVE_FOLD } from '../../store/fetch'

const { useState, useEffect } = React

const CartoonFold = ({ data, Dispatch, State }: any) => {
  let {
    readed
  } = State

  let hasReaded = false
  if (readed && readed.length) {
    readed.some((item: any) => {
      if (item.name === data) {
        hasReaded = item.readed
        return true
      }
    })
  }

  const changeFold = async (data: string) => {
    // 保存文件夹
    FETCH_SAVE_FOLD({
      type: 'saveFold',
      fold: data
    })

    Dispatch({
      type: 'changeFold', value: {
        breadcrumb: data
      }
    })
  }

  const changeReaded = async (e: any) => {
    FETCH_SAVE_FOLD({
      type: 'changeReaded',
      fold: data,
      readed: e.target.checked
    })
  }
  console.log(hasReaded)
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className="card-text">
          <a href={`#${data}`} onClick={() => changeFold(data)}>{data}</a>
        </h5>
      </div>
      <div className="card-footer">
        <div className='form-check form-check-inline'>
          <input className="form-check-input" type="checkbox" defaultChecked={hasReaded} onChange={changeReaded} />
          <label className="form-check-label">readed</label>
        </div>
      </div>
    </div>
  )
}

const CartoonImg = ({ data, State, Dispatch }: any) => {
  let {
    breadcrumb
  } = State

  const showModal = () => {
    Dispatch({ type: 'showModal', value: data })
  }

  return (
    <div className='card' onClick={showModal}>
      <img className="card-img-top" src={`//${location.host}/Cartoon${breadcrumb ? `/${breadcrumb}` : ''}/${data}`} alt="" />
      <div className='card-body'>
        <h5 className="card-text">{data}</h5>
      </div>
    </div>
  )
}

const Cartoons = ({ State, Dispatch }: any) => {

  let {
    dirList,
    fileList
  } = State

  return (
    <div className='card-group'>
      {
        !!dirList && !!dirList.length && dirList.map((item: any, index: any) => <CartoonFold key={index} data={item} State={State} Dispatch={Dispatch} />)
      }
      {
        !!fileList && !!fileList.length && fileList.map((item: any, index: any) => <CartoonImg key={index} data={item} State={State} Dispatch={Dispatch} />)
      }
    </div>
  )
}
export default Cartoons
