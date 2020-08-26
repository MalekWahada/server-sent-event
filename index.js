const app = require('express')();

app.get('/', (req, res) => res.send("hello!"));

app.get('/stream', (req, res) => {
    res.setHeader("Content-type", "text/event-stream");
    send(res);
})

let i = 0;
function send(res) {
    res.write("data:" + `hello!${i++}\n\n`);
    setTimeout(() => send(res), 1000);
}
app.listen(8080);
console.log("listening on port 8080!");