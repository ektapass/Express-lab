// Require modules
const express = require('express');

// Create the Express app
const app = express();
const port = 3000;
const fs = require('fs') // this engine requires the fs module
app.engine('madeline', (filePath, options, callback) => { // define the view engine
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#body#', '<body>' + options.body + '</body>')
      
    
    
    
      return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the  view engine

app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am Ekta' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Learning at Per Scholas', content: 'front end development and backend development ' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'Express', message: 'using template', content: 'changing the content mentioned in document' })
  })
  
  app.get('/mode', (req, res) => {
    res.render('template', { title: 'Learning mode ', message: 'Remote learning', content: 'new experience' })
  })

  app.get('/class-days', (req, res) => {
    res.render('template', { title: 'Schedule ', message: 'SE schedule', content: 'Tuesday to Friday' })
  })

  app.get('/home', (req, res) => {
    res.render('sample', { body: 'Schedule ', message: 'Perscholas home page', content: 'info about lectures ' })
  })
  app.listen(port, function() { 
    console.log('Listening on port 3000');
   });
   app.get('/zoom', (req, res) => {
    res.render('sample', { body: 'zoom calls ', message: 'Perscholas zoom call links', content: 'links for lectures and office hours ' })
  })
  app.get('/assignments', (req, res) => {
    res.render('sample', { body: 'assignments for Express ', message: 'Perscholas SE assignments', content: 'Express assignment due today ' })
  })
  app.get('/syllabus', (req, res) => {
    res.render('sample', { body: 'SE syllabus ', message: 'Perscholas SE  details about syllabus', content: 'mod 1 and mod2 syllabus ' })
  })
  app.get('/lectures-recordings', (req, res) => {
    res.render('sample', { body: 'SE lecture recordings ', message: 'Perscholas SE  lectures recordings', content: 'detailed explanation about all ' })
  })