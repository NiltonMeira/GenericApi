import express from 'express'

const app = express()

app.use(cors(
    {
        origin: "*"
    }
))

app.use(express.json())


export default app

function cors(arg0: { origin: string }): any {
    throw new Error('Function not implemented.')
}
