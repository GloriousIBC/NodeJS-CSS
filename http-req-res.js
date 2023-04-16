const http = require('http')

http.createServer(() => {
    res.writeHead(200, {
        'content-type':'text/html' //;charset=utf8 ทำให้พิมพ์ไทยได้
    })
    // res.statusCode = 200
    // res.setHeader('content-type', 'text/html')
    

    if (req.url === "/") {
        res.write('<h2>This is Home page</h2>')
        for( let i=1; i<7 ;i++ ) 
        res.write(`<h${i}>Your're Welcome ${i} </h${i}>`)
        return res.end() //จะได้เด้งออกจาก function เลย
    }

    if (req.url === "/user") {
        res.write('<h2>This is User page</h2>')
        return res.end()
    }

    if (req.url === "/page1") {
        res.write(`<!DOCTYPE html>
            <html>
            <body style="background-color:powderblue;">
            
            <h1>This is a heading</h1>
            <p>This is a paragraph.</p>
            
            </body>
            </html>`)
        return res.end()
    }

    //function form(req, res) {
    //    res.write(

    //       return res.end()
    //     )
    //}

    // if (req.url === "/form") {
    //     res.write(

    //        return res.end()
    //     )
    // }

    // if (req.url === "/form") {
    //     return form(req,res)
    // }

    res.writeHead(404, 'Not found in our site..',{
        'content-tpye':'text/html'
    })
    res.write('Welcome to NodeJS')
    // res.statusCode = 404
    // res.statusMessage = "Not found in our site..."
    // res.setHeader('content-type', 'text/html')
    // res.write(res.statusMessage)
    res.end('<hr><h3>Not Found</h3></hr>')

}).listen(8080, () => console.log('Server start...'))