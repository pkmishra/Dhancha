var dust = require('dust-formspring');

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok();
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.a(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = 'Follow me @{name}';
    var expected = 'Follow me @sandosh';

    plugin.compile(content, 'template.dust', function(error, data) {
      var compiled = eval(data);
      dust.loadSource(compiled);
      dust.render('template', {'name': 'sandosh'}, function(error, output) {
        expect(error).not.to.be.ok();
        expect(output).to.equal(expected);
        done();
      });
    });
  });
});
