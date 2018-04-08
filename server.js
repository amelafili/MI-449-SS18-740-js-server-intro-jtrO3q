// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server for the joke and cute pages, and page not availavle
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Hello!</h1>' +
      '<img src="http://sites.google.com/site/mockturtlealumni2/5Loggerhead_Turtle.jpg" alt="Greetings">'
    )
  } else if (request.url === '/random-joke') {
    var num = Math.random()
    if (num > 0.33) {
      response.end('<h1>Funny jokes!</h1>' +
       '<p>Knock, knock!</p> <p>Who\'s there?</p> <p>Opportunity!</p> ' +
       '<p>That is impossible. Opportunity doesn’t come knocking twice!</p>')
    } else if (num > 0.66) {
      response.end('<h1>Funny jokes!</h1>' +
      '<p>Knock, knock!</p> <p>Who\'s there?</p> <p>An extraterrestrial</p>' +
      '<p>Extraterrestrial who?</p> <p></p>')
    } else {
      response.end('<h1>Funny jokes!</h1>' +
      '<p>Knock, knock!</p> <p>Who\'s there?</p> <p>Beats.</p>' +
      '<p>Beats who?</p> <p>Beats me.</p>')
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute turtle!</h1>' +
      '<img src="http://www.aws.org.au/wp-content/uploads/2017/04/iStock-619670754.jpg" alt="turtles"')
  } else {
    response.end('<h1>Page Not Found</h1>' +
      '<p>The requested URL ' + request.url + ' was not found.</p>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080 and Heroku
var port = process.env.PORT || 8080
server.listen(port)

    // Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
