import { ITInitalState } from './initalState'

interface ITAction {
  type: string
  value?: string
}

const reducer = (state: ITInitalState, action: ITAction) => {
  switch (action.type) {
    case 'updataInit':
      return Object.assign({}, state, action.value)
    case 'updataFold':
      return Object.assign({}, state, action.value)
    case 'showEdit':
      return Object.assign({}, state, {
        isShowEdit: true
      })
  }
}

export default reducer