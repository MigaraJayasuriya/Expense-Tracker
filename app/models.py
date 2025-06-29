from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from .database import Base

class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    amount = Column(Float, nullable=False)
    category = Column(String, index=True)
    description = Column(String, index=True)
    created_at =  Column(DateTime, default=datetime.utcnow)

class Income(Base):
    __tablename__ = "incomes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    amount = Column(Float, nullable=False)
    description = Column(String, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)

