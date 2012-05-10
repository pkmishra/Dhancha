## dustjs-brunch
Adds [dust.js](http://akdubya.github.com/dustjs/) support to
[brunch](http://brunch.io).

## Installation
Add `"dustjs-brunch": "x.y.z"` to `package.json` of your brunch app.

Pick a plugin version that corresponds to your minor (y) brunch version.

If you want to use git version of plugin, add
`"dust-brunch": "git@github.com:sandosh/dustjs-brunch.git"`.

## Usage:

Create a Mustache template

    # views/templates/city.dust
    I live in {{name}}

Require the template

    compiled_template = require 'views/templates/city'

Load template into dustjs cache object

	dust.loadSource(compiled_template)

Render the template with some data:

    dust.render('city', {'name': 'San Francisco'}, function(error, output) {
    	if (!error) {
    		$el.html(output);
    	}
    })
