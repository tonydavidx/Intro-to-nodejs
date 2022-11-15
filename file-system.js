const fs = require('fs')

fs.copyFileSync('hello.text', 'hello-copy.text')

cont new = fs.readFileSync('hello-copy.text', 'utf8')