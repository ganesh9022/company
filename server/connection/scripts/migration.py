from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
import os

class MongoDBHandler:
    def __init__(self, uri, db_name):
        self.uri = uri
        self.db_name = db_name
        self.client = None
        self.db = None
        self.connect()

    def list_collections(self):
        try:
            print("Collections in the database:")
            print(self.client[self.db_name].list_collection_names())
        except Exception as e:
            print(f"Error listing collections: {e}")

    def connect(self):
        try:
            self.client = MongoClient(self.uri)
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
            self.db = self.client[self.db_name]
        except Exception as e:
            print(f"Connection failed: {e}")

    def check_database(self):
        try:
            databases = self.client.list_database_names()
            if self.db_name in databases:
                print("Database Exists")
            else:
                print("Create Database")
        except Exception as e:
            print(f"Error checking database: {e}")

    def create_collections(self):
        try:
            collections_data = {
                "user": {
                         "user_id": "", 
                         "firstname": "",
                        "lastname": "",
                         "gender": "", 
                         "email": "",
                         "password": "",
                         "role": "",
                         "department": "", 
                         "date_of_joining": "",
                         "designation": "",
                         "account_number": "", 
                         "bank_name": "",
                         "pan_number": "", 
                         "country_code": "",
                         "date_of_birth": ""
                         },

                "Departments": {
                    "department": "",
                    "manager": "", 
                    "user_id": "", 
                    "email": ""
                    },
                    "leave_info": {
                    "user_id": "", 
                    "department": "", 
                    "total_leaves": "",
                    "leave_balance": "",
                    "leave_type": "", 
                    "start_date": "", 
                    "end_date": ""
                    },
                "Reaction": {
                    "user_id": "", 
                    "firstname": "", 
                    "lastname": "", 
                    "email": ""
                    },
                "Data": {
                    "user_id": "", 
                    "firstname": "", 
                    "lastname": "", 
                    "email": ""
                    },
                "Automation": {
                    "user_id": "", 
                    "firstname": "", 
                    "lastname": "", 
                    "email": ""
                    },
                "payslip": {
                    "user_id": "", 
                    "allowance(HRA)": "",
                    "bonus": "", 
                    "pf": "", 
                    "professional_tax": "",
                    "present_days": "", 
                    "total_salary": ""
                    }
            }
    
            print("Creating collections...")
            for collection_name, data in collections_data.items():
                mycol = self.db[collection_name]
                mycol.insert_one(data)
            print("Collections created successfully!")
        except Exception as e:
            print(f"Error creating collections: {e}")

if __name__ == "__main__":
    load_dotenv()
    mongodb_uri = os.getenv("URI")
    DB_NAME = "leaveportal"

    if mongodb_uri:
        mongo_handler = MongoDBHandler(mongodb_uri, DB_NAME)
        mongo_handler.check_database()
        mongo_handler.create_collections()
        mongo_handler.list_collections()
    else:
        print("Error: MongoDB URI not found in environment variables.")
