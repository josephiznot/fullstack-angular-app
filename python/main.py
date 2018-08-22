import webapp2
from google.appengine.ext import ndb

class Account(ndb.Model):
    username = ndb.StringProperty()
    userid = ndb.IntegerProperty()
    email = ndb.StringProperty() 

class MainPage(webapp2.RequestHandler):
    def get(self):
        sandy = ndb.Key('Account', 5733403383037952)
        sandy_key = sandy.get()
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(sandy_key)

    def post(self):
        sandy = Account(username='Sandy', userid=999, email='sandy@example.com')
        sandy_key = sandy.put()
        print(sandy_key.kind())
        self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(sandy_key)

app = webapp2.WSGIApplication([
    ('/money', MainPage),
], debug=True)
