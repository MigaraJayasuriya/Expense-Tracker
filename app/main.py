from fastapi import FastAPI
from . database import Base, engine
from .routers import expense

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Expense Tracker API", version="1.0.0")

app.include_router(expense.router, prefix="/api", tags=["expenses"])