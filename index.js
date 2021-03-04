const express = require('express')
const app = express()

app.use(express.json())
let books = []

// app.get('/bookss',(req,res) => {
//     res.status(200).json(books)
// })

app.post('/books',(req,res) => {
    let addtitle = req.body.title
    let addprice = req.body.price
    let addunit = req.body.unit
    let addisbn = req.body.isbn
    let addimage = req.body.image

    let newbooks = {
        title: addtitle,
        price: addprice,
        unit: addunit,
        isbn: addisbn,
        stars: addStars,
        image: addimage
    }
    let booksID = 0
    books.push(newbooks)
    booksID = bookss.length -1

    res.status(201).json(booksID)
})
const port = 3000
app.listen(port, () => console.log(`Server started at ${port}`))




