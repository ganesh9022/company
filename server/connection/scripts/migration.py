from pymongo import MongoClient
from dotenv import load_dotenv
import os
from datetime import datetime


## load the .env
load_dotenv()


class MongoDBHandler:
    def __init__(self): 
        self.uri = os.getenv('URI')
        self.db_name = os.getenv('DB_NAME', 'leave_portal') # default one is leave portal

        ## Runtime
        self.client = None
        self.db = None

    #Connection
    def get_conn(self):
        try:
            self.client = MongoClient(self.uri)
            self.client.admin.command('ping')
            print("Pinged your deployment. You have successfully connected to MongoDB!")
        except Exception as e:
            print(f"Error occurred while getting connection from mongo client. \n Error: {e}")
        return self.client
    
    #Database creation
    def get_db(self,db_name):
        databases = self.client.list_database_names()
        if db_name in databases:                   #Check if db already exits
            self.db=self.client[db_name]
            return self.db
        else:
            try:
                self.db = self.client[db_name]   
            except Exception as e:
                return f"Error occurred while creating database {db_name} : {e}"
            return self.db

    #Collection creation
    def create_collections(self):
        try:
            schema_documents= {
                # Collection user
                "user_collection" : {
                    "user_id": str,
                    "firstname": str,
                    "lastname": str,
                    "gender": str,
                    "email": str,
                    "password": str,
                    "role": str,
                    "department": str,
                    "date_of_joining": datetime,
                    "designation": str,
                    "account_number": str,
                    "bank_name": str,
                    "pan_number": str,
                    "country_code": str,
                    "date_of_birth": datetime
                },

                # Collection Department
                "department_collection" : {
                    "department": str,
                    "manager": str,
                    "user_id": str,
                    "email": str
                },

                # Collection leave_info
                "leave_info_collection" : {
                    "user_id": str,
                    "department": str,
                    "total_leaves": int,
                    "taken_leaves": int,
                    "leave_balance": int,
                    "leave_type": str,
                    "start_date": datetime,
                    "end_date": datetime
                },

                # Collection Reaction
                "reaction_collection" : {
                    "user_id": str,
                    "firstname": str,
                    "lastname": str,
                    "email": str
                },

                # Collection Data
                "data_collection" : {
                    "user_id": str,
                    "firstname": str,
                    "lastname": str,
                    "email": str
                },

                # Collection Automation
                "automation_collection" : {
                    "user_id": str,
                    "firstname": str,
                    "lastname": str,
                    "email": str
                },

                # Collection payslip
                "payslip_" : {
                    "user_id": str,
                    "allowance(HRA)": float,
                    "bonus": float,
                    "pf": float,
                    "professional_tax": float,
                    "present_days": int,
                    "total_salary": float
                }
                }

            for collection_name, schema in schema_documents.items():
                try:
                    collections=self.db.list_collection_names()
                    if collection_name not in collections:
                        collection = self.db[collection_name]
                        collection.insert_many([schema])
                        return {"message: " f"Inserted  document into collection '{collection_name}'"}
                    else:
                        return {"message: " f"collection '{collection_name}' already exists"}
                except Exception as e:
                    print(f"Error occurred while inserting  document into collection '{collection_name}': {e}")
                  

        except Exception as e:
            print(f"Error occurred while creating collections: {e}")
            raise

