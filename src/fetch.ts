const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const FETCH_NPROXY = async (data: any) => {
  return await fetch('',{
    method: 'post',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json())
}