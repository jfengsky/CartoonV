export interface ITInitalState {

  // 漫画主目录
  cartoonfold: string

  // 是否显示modal
  isShowEdit: boolean

  // 当前目录
  breadcrumb: string

  // 显示图片浮层
  isShowModal: boolean

  // 当前高亮的图片
  currentImage: string
}

let breadcrumb = ''
let urlHash = location.hash
if(urlHash){
  breadcrumb = urlHash.replace('#', '')
}

const hash = location.hash
let isShowEdit = false
switch (hash) {
  case '#edit':
    isShowEdit = true
    break
}

const initalState: ITInitalState = {
  cartoonfold: '',
  isShowEdit,
  breadcrumb,
  isShowModal: false,
  currentImage: null
}

export default initalState 