from pymongo import MongoClient
from dotenv import load_dotenv
import os
from datetime import datetime
import json
import logging


## load the .env
load_dotenv()


class MongoDBHandler:
    def __init__(self): 
        self.uri = os.getenv('URI')
        self.db_name = os.getenv('DB_NAME', 'leaveportal')  # Default one is leave portal
        
        # Runtime
        self.client = None
        self.db = None

    def get_conn(self):
        try:
            self.client = MongoClient(self.uri)
            self.client.admin.command('ping')
            print("Pinged your deployment. You have successfully connected to MongoDB!")
        except Exception as e:
            logging.error(f"Error occurred while getting connection from mongo client. \n Error: {e}")
        return self.client
    
    # Database creation or retrieval
    def get_db(self, db_name):
        databases = self.client.list_database_names()
        if db_name in databases:  # Check if db already exists
            self.db = self.client[db_name]
            return self.db
        else:
            try:
                self.db = self.client[db_name]  # db creation
            except Exception as e:
                logging.error (f"Error occurred while creating database {db_name} : {e}")
            return self.db

    # List collections
    def list_collections(self):
        try:
            collection_list = self.db.list_collection_names()
            return collection_list
        except Exception as e:
            logging.error (f"Error occurred while listing collections: {e}")

    # Get schema
    def get_schema(self, schema_file):
        try:
            with open(schema_file, 'r') as f:
                collection_schema = json.load(f)
                return collection_schema
        except Exception as e:
            logging.error ( f"Error occurred while accessing schema: {e}")

    # Create collection and insert documents
    def create_collections(self):       
        collection_schema = self.get_schema('schema.json')
        for collection_name, documents in collection_schema.items():
            try:
                collections = self.list_collections()
                if collection_name not in collections:
                    self.db.create_collection(collection_name)
                    collection = self.db[collection_name]
                    collection.insert_many(documents)  # Insert documents into the collection
                    print(f"Created collection '{collection_name}' and inserted {len(documents)} documents.")
                else:
                    print(f"Collection '{collection_name}' already exists.")
            except Exception as e:
                logging.error(f"Error occurred while creating collection '{collection_name}': {e}")

if __name__ == "__main__":
    mongo_handler = MongoDBHandler()
    mongo_handler.get_conn()
    mongo_handler.get_db(mongo_handler.db_name)
    mongo_handler.create_collections()
