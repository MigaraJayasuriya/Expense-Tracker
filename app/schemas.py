from pydantic import BaseModel
from datetime import datetime

class ExpenseBase(BaseModel):
    title: str
    amount: float
    category: str

class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

class IncomeBase(BaseModel):
    title: str
    amount: float
    description: str

class IncomeCreate(IncomeBase):
    pass

class Income(IncomeBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

