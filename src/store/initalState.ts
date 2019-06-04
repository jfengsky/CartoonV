export interface ITInitalState {

  // 是否显示modal
  isShowEdit: boolean,

  // 当前目录
  breadcrumb: string

  // 显示图片浮层
  isShowModal: boolean
}

const hash = location.hash
let isShowEdit = false
switch (hash) {
  case '#edit':
    isShowEdit = true
    break
}

const initalState: ITInitalState = {
  isShowEdit,
  breadcrumb: '',
  isShowModal: false
}

export default initalState 