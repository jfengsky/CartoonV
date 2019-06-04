import { readfile, writefile, readfold } from '../file'

const initPath = '../../init/index.json'

export default async ({ data }: any) => {
  let {
    type,
    value,
    fold
  } = data
  if (type === 'get') {
    let data = await readfile({ path: initPath })
    return data
  } else if (type === 'save') {
    let data = await writefile({ path: initPath, key: 'cartoonfold', value })
    return data
  } else if(type === 'getfold'){
    let data = await readfold({ fold })
    return data
  }
  return {}
}