import { ITInitalState } from './initalState'

interface ITAction {
  type: string
  value?: any
}

const reducer = (state: ITInitalState, action: ITAction) => {
  switch (action.type) {
    case 'updataInit':
      return Object.assign({}, state, action.value)
    case 'updataFold':
      return Object.assign({}, state, action.value)
    case 'showModal':
      return Object.assign({}, state, {
        isShowModal: true
      })
    case 'hideModal':
      return Object.assign({}, state, {
        isShowModal: false
      })
    case 'showEdit':
      return Object.assign({}, state, {
        isShowEdit: true
      })
  }
}

export default reducer