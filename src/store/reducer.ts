import { ITInitalState } from './initalState'

interface ITAction {
  type: string
  value?: any
}

const reducer = (state: ITInitalState, action: ITAction) => {
  switch (action.type) {
    case 'updataInit':
      return Object.assign({}, state, {
        ...action.value
      })
    case 'updataFold':
      return Object.assign({}, state, action.value)
    case 'showModal':
      console.log(action)
      return Object.assign({}, state, {
        isShowModal: true,
        currentImage: action.value
      })
    case 'hideModal':
      return Object.assign({}, state, {
        isShowModal: false,
        currentImage: null
      })
    case 'changeFold':
      return Object.assign({}, state, {
        ...action.value
      })
    case 'changeCurrentImage':
      return Object.assign({}, state, {
        currentImage: action.value
      })
    case 'showEdit':
      return Object.assign({}, state, {
        isShowEdit: true
      })
  }
}

export default reducer