/**
 * 漫画目录
 */

import * as React from 'react'
import { FETCH_PATCH, FETCH_FOLD } from '../../store/fetch'

const { useState, useEffect } = React

const CartoonFold = ({ data, Dispatch, State }: any) => {
  const changeFold = async (data: string) => {
    let {
      cartoonfold
    } = State
    const fetchFolds = await FETCH_FOLD({ type: 'getfold', fold: `${cartoonfold}/${data}` })
    let {
      data: {
        dirList,
        fileList
      },
      state
    } = fetchFolds
    Dispatch({
      type: 'updataFold', value: {
        dirList,
        fileList,
        breadcrumb: data
      }
    })
  }

  return (
    <div className='card'>
      {/* <img className="card-img-top" src={`//${location.host}/Cartoon/${data}`} alt="Card image cap" /> */}
      <div className='card-body'>
        <h5 className="card-text">
          <a href='javascript:;' onClick={() => changeFold(data)}>{data}</a>
        </h5>
      </div>
      <div className="card-footer">
        <small className="text-muted">readed</small>
      </div>
    </div>
  )
}

const CartoonImg = ({ data, State, Dispatch }: any) => {
  let {
    breadcrumb
  } = State

  const showModal = () => {
    Dispatch({ type: 'showModal' })
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
