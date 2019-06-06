const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const FETCH_PATCH = async (data: any) => {
  return await fetch('/cartoonPath', {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const FETCH_FOLD = async (data: any) => {
  return await fetch('/cartoonFold', {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const FETCH_SAVE_FOLD = async (data: any) => {
  return await fetch('/changeFold', {
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}