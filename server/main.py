from fastapi import FastAPI

app = FastAPI()

## APIs

@app.get("/")
def home():
    return "Server is running"
