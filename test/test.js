var nistonomicon = require('nistonomicon');
var overlay = ['AU_8'];
var inherited = [];
var implemented = require('../index.js');
it('should run a test of the ntp client', function(done) {
    nistonomicon(overlay, inherited, implemented, function(error, result) {
        console.log(result)
        done();
    })
})