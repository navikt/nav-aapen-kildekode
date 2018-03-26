import express from 'express'
import * as config from '../config'

const router = new express.Router()

router.get('/', (req, res) => {
  res.send('welcome')
})

const teams = [{
  key: 'aura',
  name: 'Aura - Automatisk Utrulling av Applikasjoner'
}, {
  key: 'bris',
  name: 'Team BRIS'
}]

router.get('/config', (req, res) => res.send({
  OAUTH_CLIENT_ID: config.getConfig('OAUTH_CLIENT_ID'),
  OAUTH_CALLBACK_URL: config.getConfig('OAUTH_CALLBACK_URL')
}))

router.get('/teams', (req, res) => res.send(teams))

router.get('/team/:key', (req, res) => res.send({
  key: req.params.key,
  name: 'Teamnavn',
  repositories: [{
    key: 'foo',
    name: 'foo-test-app'
  }]
}))

export default router
