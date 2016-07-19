/**
 * Created by gaoqikai on 7/19/16.
 */
const http = require('http');
const st = require('st');


function serve(done) {
    http.createServer(
        st({
            path: '.',
            url: '/blog',
            index: 'index.html',
            cache: false
        })
    ).listen(8000, done);
    console.log('Server listening on http://localhost:8000/blog/');
}
serve();