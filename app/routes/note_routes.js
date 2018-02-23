module.exports = function(app,db) {
    app.post('/notes', (req, res) => {
        //Create your note in here
        console.log(req.body);
        res.send('Hello')
    })
}

