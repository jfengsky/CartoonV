export interface ITInitalState {

  // 是否显示modal
  isShowEdit: boolean
}

const hash = location.hash
let isShowEdit = false
switch (hash) {
  case '#edit':
    isShowEdit = true
    break
}

const initalState: ITInitalState = {
  isShowEdit
}

export default initalState 