import express from 'express'
import next from 'next'
import api from './api/router'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.use('/api', api)

    const okHandler = (req, res) => res.send('OK')
    server.get('/isReady', okHandler)
    server.get('/isAlive', okHandler)

    server.get('/teams/:key', (req, res) => {
      return app.render(req, res, '/team', { ...req.query, key: req.params.key })
    })

    server.get('/b', (req, res) => {
      return app.render(req, res, '/a', req.query)
    })

    server.get('/posts/:id', (req, res) => {
      return app.render(req, res, '/posts', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
