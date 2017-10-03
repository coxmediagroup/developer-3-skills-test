var scrape = require('website-scraper');
var options = {
  urls: ['http://sample.org/'],
  directory: '/path/to/save/',
};
 
// with promise
scrape(options).then((result) => {
   console.log(result);
}).catch((err) => {
   console.log(err)
});
 
// or with callback
scrape(options, (error, result) => {
    /* some code here */
});

scrape({
  urls: ['http://sample.org/'],
  directory: '/path/to/save',
  sources: [
    {selector: 'img', attr: 'src'},
    {selector: 'link[rel="stylesheet"]', attr: 'href'},
    {selector: 'script', attr: 'src'}
  ]
}).then(console.log).catch(console.log);


scrape({
  urls: ['http://sample.com/'],
  directory: '/path/to/save',
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
    }
  }
}).then(console.log).catch(console.log);

scrape({
  urls: ['http://sample.com'],
  directory: '/path/to/save',
  subdirectories: [
    {directory: 'img', extensions: ['.jpg', '.png', '.svg']},
    {directory: 'js', extensions: ['.js']},
    {directory: 'css', extensions: ['.css']}
  ]
}).then(console.log).catch(console.log);

// Links to other websites are filtered out by the urlFilter
var scrape = require('website-scraper');
scrape({
  urls: ['http://sample.com/'],
  urlFilter: function(url){
    return url.indexOf('http://sample.com') === 0;
  },
  directory: '/path/to/save'
}).then(console.log).catch(console.log);

var scrape = require('website-scraper');
scrape({
  urls: ['http://sample.com/'],
  urlFilter: function(url){ return url.indexOf('http://sample.com') === 0; },
  recursive: true,
  maxDepth: 100,
  filenameGenerator: 'bySiteStructure',
  directory: '/path/to/save'
}).then(console.log).catch(console.log);