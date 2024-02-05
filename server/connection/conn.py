from pymongo import MongoClient
from dotenv import load_dotenv
import os

## load the .env
load_dotenv()

## make connection
class MogoConnection():
    def __init__(self):
        pass

    def get_conn():        
        URI=os.getenv('URI')
        MONGO_USERNAME=os.getenv('MONGO_USERNAME')
        MONGO_PASSWORD=os.getenv('MONGO_PASSWORD')

        client=MongoClient(URI)

        ## confirm db connection
        try:   
            print("Pinged your deployment. You successfully connected to MongoDB!")
   
        except Exception as e:
            print(e)

