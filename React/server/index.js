const express =require ('express')

const app =express ()
app.get('/data',(req,res)=> {
    const dummy =[{
        username:'Ravi kumar',
        city:'hazaribagh',
        age:24
    }]
    // res.send('hello guys')
    res
      .setHeader("Access-Control-Allow-origin", "http://localhost:5173")
      .json({ data: dummy });
})

app.listen(8000,()=> {
    console.log('server is running');
})