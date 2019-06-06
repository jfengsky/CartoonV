import { readfile, writefile, readfold, writeFold, writeFoldfile, writeFoldReaded } from '../file'

const initPath = '../../init/index.json'

export default async ({ data }: any) => {
  let {
    type,
    value,
    fold,
    page,
    readed
  } = data
  if (type === 'get') {
    let data = await readfile({ path: initPath })
    return data
  } else if (type === 'save') {
    let data = await writefile({ path: initPath, key: 'cartoonfold', value })
    return data
  } else if (type === 'getfold') {
    let data = await readfold({ fold })
    return data
  } else if (type === 'saveFold') {
    let data = await writeFold({ path: initPath, fold })
    return data
  } else if (type === 'saveFoldFile') {
    let data = await writeFoldfile({ path: initPath, fold, page })
    return data
  } else if (type === 'changeReaded') {
    let data = await writeFoldReaded({ path: initPath, fold, readed })
    return data
  }
  return {}
}