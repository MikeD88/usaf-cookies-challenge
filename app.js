import express, { req, res } from "express"
import cookieParser from "cookie-parser"
import { redirect } from "react-router-dom"

const app = express()
app.use(cookieParser())
app.use(express.json())

app.get("/login/:name", (req, res) => {
    let { name } = req.params
    res.cookie('name', name);
    res.end();
})

app.get('/hello', (req, res) => {
    if(req.cookies.name) res.end('Welcome ' + req.cookies.name);
    else {
        res.redirect('/login');
    }
})

app.listen(7079, () => {
    console.log(`Server is running on 7079.`)
})

export default app