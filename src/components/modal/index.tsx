import * as React from 'react'

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
      if(e.keyCode === 37){
        prevImage()
      } else if(e.keyCode === 39){
        nextImage()
      }
    }, false)
  }, [])

  return (
    <div style={modalStyle}>
      {!isFull && <div className='modal-header'>
        <span style={fr} onClick={() => Dispatch({ type: 'hideModal' })}>关闭</span>
        <span style={fr} onClick={() => fullScreen()}>全屏</span>
      </div>}
      <div style={{ position: 'absolute', zIndex: 1 }}>
        <img src={`//${location.host}/Cartoon${breadcrumb ? `/${breadcrumb}` : ''}/${currentImage}`} width='100%' />
      </div>
      <div style={{ position: 'fixed', zIndex: 10 }}>
        <a href='javascript:;' onClick={prevImage}>prev</a>
        <a href='javascript:;' onClick={nextImage}>next</a>
      </div>
    </div>
  )
}

export default Modal