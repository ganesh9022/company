from pymongo import MongoClient
from dotenv import load_dotenv
import os

## load the .env
load_dotenv()

## make connection
class MogoConnection():
    def __init__(self):
        # Load environment variables
        self.URI = os.getenv('URI')
        self.MONGO_USERNAME = os.getenv('MONGO_USERNAME')
        self.MONGO_PASSWORD = os.getenv('MONGO_PASSWORD')
        self.DBNAME = os.getenv('DBNAME')
        
        # Initialize the MongoDB client
        self.client = MongoClient(self.URI)

        ## confirm db connection
        try:   
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
   
        except Exception as e:
            print(f"Error occurred while getting connection from mongo client. \n Error: {e}")

    def get_conn(self):        
        return self.client
       

