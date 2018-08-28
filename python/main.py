import webapp2
import logging
from google.appengine.ext import ndb
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
class GetTask(webapp2.RequestHandler):
    def get(self):
        try
class NewTask(webapp2.RequestHandler):
    def post(self):
        print('-----------BODY---------', self.request.POST['task'])
        clientTask = self.request.POST['task']
        newTask = Task(task = clientTask, isComplete=False)
        newTask.put()
        self.response.headers['Content-Type']="text/plain"
        self.response.write(newTask)
        
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
    ('/api/task', GetTask),
    ('/api/new-task', NewTask)
], debug=True)

app.error_handlers[401] = handle_401
app.error_handlers[404] = handle_404
app.error_handlers[500] = handle_500
