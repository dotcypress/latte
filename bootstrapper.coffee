express = require 'express'
hub = require './lib/hub'

app = express()

app.configure 'production', ->
  app.use express.static 'public', { maxAge: 86400000 }

app.configure 'development', ->
  app.use express.static 'public'
  app.use express.logger()
  app.use express.responseTime()

app.configure ->
  app.enable 'trust proxy'
  app.use express.cookieParser()
  app.use express.favicon()
  app.use app.router

app.configure 'development', ->
  app.use express.errorHandler()

registerController = (app, name, filters=[]) ->
  controller = require "./controllers/#{name}"
  controller app, filters

registerController app, 'main'

port = process.env.PORT || 3000
app.listen port
