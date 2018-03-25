const express = require('express')

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

router.get('/teams', (req, res) => res.send(teams))

router.get('/team/:key', (req, res) => res.send({
  key: req.params.key,
  name: 'Teamnavn',
  repositories: [{
    key: 'foo',
    name: 'foo-test-app'
  }]
}))

module.exports = router
