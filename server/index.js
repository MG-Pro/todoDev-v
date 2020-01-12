const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const bundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest')
const port = 3000
const host = '127.0.0.1'

const renderer = require('vue-server-renderer')
  .createBundleRenderer(bundle, {
    runInNewContext: false,
    template: fs.readFileSync('./index.html', 'utf-8'),
    clientManifest,
  })

server.use(express.static(path.join(__dirname, '../dist'), {
  index: false
}))

server.get('*', (req, res) => {
  const context = {url: req.url}
  res.setHeader("Content-Type", "text/html");
  renderer.renderToString(context)
    .then((html) => {
      res.end(html)
    }).catch((err) => {
    if(err.code === 404) {
      res.status(404).end('Page not found')
    } else {
      res.status(500).end('Internal Server Error')
    }
  })
})

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
