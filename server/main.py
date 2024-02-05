from fastapi import FastAPI


app = FastAPI()

class MyApp:
    # Home route
    @app.get("/")
    async def read_root():
        return {"message": "Welcome to my FastAPI application!"}



if __name__ == "__main__":
    my_app = MyApp()
    my_app.read_root()