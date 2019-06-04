import * as React from 'react'

const modalStyle: any = {
  background: '#000',
  position: 'absolute',
  minWidth: '90%',
  minHeight: '90%',
  top: '5%',
  left: '5%',
  color: '#fff'
}

const fr: any = {
  float: 'right'
}

const fullScreen = () => {
  var el: any = document.documentElement;
  var rfs: any = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(el);
  };
  return;
}

const Modal = ({ State, Dispatch }: any) => {

  const [isFull, setFull] = React.useState(false)
  
  return (
    <div style={modalStyle}>
      <div className='modal-header'>
        <span style={fr}>关闭</span>
        <span style={fr} onClick={() => fullScreen()}>全屏</span>
      </div>
    </div>
  )
}

export default Modal