import webapp2
import logging
from google.appengine.ext import ndb
from google.appengine.api import urlfetch
class Task(ndb.Model):
    task = ndb.StringProperty()
    isComplete = ndb.BooleanProperty() 

#REQUEST HANDLERS
class GetTasks(webapp2.RequestHandler):
    def get(self):
        print('---------------PARAMS-------------', self.request.params)
        # self.request.params["task"] != ''
        response = Task.query().fetch()
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(response)
class NewTask(webapp2.RequestHandler):
    def post(self):
        print('-----------BODY---------', self.request.POST['task'])
        clientTask = self.request.POST['task']
        newTask = Task(task = clientTask, isComplete=False)
        newTask.put()
        self.response.headers['Content-Type']="text/plain"
        self.response.write(newTask)
        
class ApiCall(webapp2.RequestHandler):
    def get(self):
        response = urlfetch.fetch("https://swapi.co/api/people/1", method="get")
        self.response.headers['Content-type']="text/plain"
        self.response.write(response.content)
#EXCEPTION HANDLERS
def handle_404(request, response, exception):
    logging.exception(exception)
    response.write(exception)
    response.set_status(404)
def handle_500(request, response, exception):
    logging.exception(exception)
    response.write(exception)
    response.set_status(500)
def handle_401(request,response, exception):
    logging.exception(exception)
    response.write(exception)
    response.set_status(401)
    
app = webapp2.WSGIApplication([
    ('/api/tasks', GetTasks),
    ('/api/new-task', NewTask),
    ('/api/api-call', ApiCall)
], debug=True)

app.error_handlers[401] = handle_401
app.error_handlers[404] = handle_404
app.error_handlers[500] = handle_500
