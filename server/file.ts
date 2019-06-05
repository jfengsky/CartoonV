/**
 * 文件操作
 */
import * as fs from 'fs'
import * as path from 'path'

//读取目录
export const readfold = async (_data: any) => {
  let {
    fold
  } = _data
  let files = await fs.readdirSync(fold)
  let dirList: any = []
  let fileList: any = []
  files.map(item => {
    let fPath = path.join(fold, item);
    let stat = fs.statSync(fPath)
    if (stat.isDirectory() === true) {
      dirList.push(item)
    }
    if (stat.isFile() === true) {
      fileList.push(item)
    }
  })
  return {
    dirList,
    fileList
  }
}

// 读取文件
export const readfile = async (_data: any) => {
  let {
    path: foldPath
  } = _data
  const filePath: string = path.join(__dirname, foldPath)
  let files = await fs.readFileSync(filePath, 'utf-8')
  let data = {}
  try {
    return JSON.parse(files)
  } catch (e) {
    return data
  }
}

// 写入文件
export const writefile = async (_data: any) => {
  let {
    path: foldPath,
    key,
    value
  } = _data
  // 先读取,然后修改,再写入
  let fileData = await readfile({ path: foldPath })
  fileData[key] = value
  const filePath: string = path.join(__dirname, foldPath)
  let wirtes = await fs.writeFileSync(filePath, JSON.stringify(fileData))
  return {
    writeState: 'success'
  }
}