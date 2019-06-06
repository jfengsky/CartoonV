import * as React from 'react'

import { FETCH_SAVE_FOLD } from '../../store/fetch'

const { useState, useEffect } = React

const modalStyle: any = {
  background: '#333',
  position: 'absolute',
  minWidth: '100%',
  minHeight: '100%',
  top: 0,
  left: 0,
  color: '#fff'
}

const fr: any = {
  float: 'right'
}

const conStyle: any = {
  background: '#fff',
  width: 400,
  height: 600,
  opacity: 0.01
}

const leftStyle = Object.assign({}, conStyle, { float: 'left' })
const rightStyle = Object.assign({}, conStyle, { float: 'right' })

const Modal = ({ State, Dispatch }: any) => {
  const [isFull, setFull] = useState(false)
  const fullScreen = () => {
    var el: any = document.documentElement;
    var rfs: any = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (typeof rfs != "undefined" && rfs) {
      rfs.call(el);
      setFull(true)
    };
    return;
  }

  let {
    currentImage,
    breadcrumb
  } = State



  const prevImage = () => changeImage('prev')
  const nextImage = () => changeImage('next')

  const changeImage = (type: string) => {
    const { fileList, currentImage } = State
    let index: number = null
    fileList.some((item: any, idx: number) => {
      if (currentImage === item) {
        index = idx
        return true
      }
    })

    if (index >= 0) {
      if (type === 'prev') {
        index--
        if (index < 0) {
          return
        }
      } else if (type === 'next') {
        index++
        if (index === fileList.length) {
          return
        }
      }
      Dispatch({ type: 'changeCurrentImage', value: fileList[index] })

    }
  }

  useEffect(() => {
    window.addEventListener('keyup', e => {
      if (e.keyCode === 37) {
        prevImage()
      } else if (e.keyCode === 39) {
        nextImage()
      }
    }, false)
  }, [])

  useEffect(() => {
    FETCH_SAVE_FOLD({
      type: 'saveFoldFile',
      fold: breadcrumb,
      page: currentImage
    })
  }, [currentImage])

  return (
    <div style={modalStyle}>
      {!isFull && <div className='modal-header'>
        <span style={fr} onClick={() => Dispatch({ type: 'hideModal' })}>关闭</span>
        <span style={fr} onClick={() => fullScreen()}>全屏</span>
      </div>}
      <div style={{ position: 'absolute', zIndex: 1 }}>
        <img src={`//${location.host}/Cartoon${breadcrumb ? `/${breadcrumb}` : ''}/${currentImage}`} width='100%' />
      </div>
      <div style={{ position: 'fixed', zIndex: 10, width: '100%' }}>
        <a href='javascript:;' onClick={prevImage} style={leftStyle} />
        <a href='javascript:;' onClick={nextImage} style={rightStyle} />
      </div>
    </div>
  )
}

export default Modal