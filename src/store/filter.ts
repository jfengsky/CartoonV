export const filterTempFile = (data: string[]): string[] => {
  const disfiles = ['.DS_Store', '.localized']
  let tempList: string[] = []
  data.map((item: string) => {
    if (disfiles.indexOf(item) < 0) {
      tempList.push(item)
    }
  })

  return tempList
}