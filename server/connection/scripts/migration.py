from pymongo.mongo_client import MongoClient
from datetime import datetime

class MongoDBHandler:
    def __init__(self, username, password, db_name):
        self.username = username
        self.password = password
        self.db_name = db_name
        self.client = None
        self.db = None

        self.connect()

    def connect(self):
        uri = f"mongodb+srv://{self.username}:{self.password}@leaveportal.f5oce1v.mongodb.net/?retryWrites=true&w=majority"
        try:
            self.client = MongoClient(uri)
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
            self.db = self.client[self.db_name]
        except Exception as e:
            print(e)

    def check_database(self):
        databases = self.client.list_database_names()
        if self.db_name in databases:
            print("Database Exists")
        else:
            print("Create Database")
            # You may choose to create the database here

    def create_collections(self):
        # Collection user
        mycol = self.db["user"]
        data = {"user_id": "123", "firstname": "Mihir","lastname":"Vanave",
            "gender":"Male","email":"bapuvanave65@gmail.com",
            "password":"Mihir@27","role":"Fullstack developer",
            "department":"","date_of_joining":"","designation":"",
            "account_number":"","bank_name":"","pan_number":"","country_code":"",
            "date_of_birth":""}
        mycol.insert_one(data)

        # Collection Department
        mycol1 = self.db["Departments"]
        data1 = {"department": "", "manager": "", "user_id": "", "email": ""}
        mycol1.insert_one(data1)

        # Collection leave_info
        mycol2 = self.db["leave_info"]
        data2 = {"user_id": "", "department": "", "total_leaves": "",
                 "taken_leaves": "", "leave_balance": "",
                 "leave_type": "", "start_date": "", "end_date": ""}
        mycol2.insert_one(data2)

        # Collection Reaction
        mycol3 = self.db["Reaction"]
        data3 = {"user_id": "", "firstname": "", "lastname": "", "email": ""}
        mycol3.insert_one(data3)

        # Collection Data
        mycol4 = self.db["Data"]
        data4 = {"user_id": "", "firstname": "", "lastname": "", "email": ""}
        mycol4.insert_one(data4)

        # Collection Automation
        mycol5 = self.db["Automation"]
        data5 = {"user_id": "", "firstname": "", "lastname": "", "email": ""}
        mycol5.insert_one(data5)

        # Collection payslip
        mycol6 = self.db["payslip"]
        data6 = {"user_id": "", "allowance(HRA)": "",
                 "bonus": "", "pf": "", "professional_tax": "",
                 "present_days": "", "total_salary": ""}
        mycol6.insert_one(data6)

    def list_collections(self):
        print(self.db.list_collection_names())

# Example usage:
if __name__ == "__main__":
    username = "leave"
    password = "Vanave2003"
    db_name = "leaveportal"

    mongo_handler = MongoDBHandler(username, password, db_name)
    mongo_handler.check_database()
    mongo_handler.create_collections()
    mongo_handler.list_collections()
