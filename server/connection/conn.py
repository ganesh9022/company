from pymongo import MongoClient
from dotenv import load_dotenv
import os

## load the .env
load_dotenv()

class MogoConnection():
    def __init__(self):
        self.uri = os.getenv('URI')
        self.db_name = os.getenv('DB_NAME', 'leave_portal') # default one is leave portal

        ## Runtime
        self.client = None

    def get_conn(self):
        try:
            self.client = MongoClient(self.uri)
            self.client.admin.command('ping')
            print("Pinged your deployment. You have successfully connected to MongoDB!")
        except Exception as e:
            print(f"Error occurred while getting connection from mongo client. \n Error: {e}")
        return self.client
