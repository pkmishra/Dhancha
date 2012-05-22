View = require './view'
template = require './templates/home'

module.exports = class HomeView extends View
  id: 'home-view'
  template: template
  render: =>
      self = this
      dust.loadSource template
      dust.render "home", {}, (err, output) ->
          self.$el.html(output)
      @afterRender()
      self
