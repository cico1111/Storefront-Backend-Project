import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


const app: express.Application = express()
const address: string = "0.0.0.0:3000"

const corsOptions = {
    origin: 'http://someotherdomain.com',
    optionsSuccessStatus: 200 // some legacy browsers(IE11, various...)
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

//text:allow to use middle ware
// middle ware: run between req and res
app.get('/test-cors', cors(corsOptions), function(req, res, next){
    res.json({msg: 'this is cors-enabled with a middle ware'})
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
