import webapp2
from google.appengine.ext import ndb

keys=[]

class Task(ndb.Model):
    task = ndb.StringProperty()
    description = ndb.StringProperty()
    isComplete = ndb.BooleanProperty() 

class MainPage(webapp2.RequestHandler):
    def get(self):
        task = ndb.Key('Task', 5733403383037952)
        sandy_key = sandy.get()
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(sandy_key)

    def post(self):
        task = Task(task='clean kitchen', 
                     description="clean counters, scrub floor, load dish washer",
                     isComplete=False)
        task_key = task.put()
        keys.append(task_key)
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(task_key)

app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)
