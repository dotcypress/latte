module.exports = (app, filters) ->

  app.get '/api/time', filters, (req, res) ->
    res.json time: new Date()
