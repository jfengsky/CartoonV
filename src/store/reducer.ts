import { ITInitalState } from './initalState'

interface ITAction {
  type: string
  value?: string
}

const reducer = (state: ITInitalState, action: ITAction) => {
  switch (action.type) {
    case 'showEdit':
      return Object.assign({}, state, {
        isShowEdit: true
      })
  }
}

export default reducer