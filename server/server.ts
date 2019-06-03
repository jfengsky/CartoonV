import * as express from "express"
import * as bodyParser from 'body-parser'

import { ITLayout, layout } from './layout'

const app: any = express()
const clientPort: number = 8082

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.get('*', (req: any, res: any) => {

  const clientProp: ITLayout = {
    title: 'CartoonV',
    content: '',
    __INITSTATE__: {}
  }

  res.send(layout(clientProp))
})

const success: any = { state: 0, data: null }
app.post('*', async (req: any, res: any) => {
  let sendData = {}
  switch (req.path) {
    case 'nproxyInfo':
      return res.send(Object.assign({}, success, sendData))
    default:
      res.sendStatus('404')
  }
})

app.listen(clientPort, () => console.log(`start client: http://localhost:${clientPort}`))