from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas, models
from ..database import SessionLocal
from sqlalchemy import func

router = APIRouter()

def get_db():
    db  = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/expenses/", response_model=schemas.Expense)
def create_expense(expense: schemas.ExpenseCreate, db: Session = Depends(get_db)):
    return crud.create_expense(db, expense)

@router.get("/expenses/", response_model=list[schemas.Expense])
def get_expenses(db: Session = Depends(get_db)):
    return crud.get_expenses(db)

@router.delete("/expenses/{expense_id}", response_model=schemas.Expense)
def delete_expense(expense_id: int, db: Session = Depends(get_db)):
    db_expense = crud.delete_expense(db, expense_id)
    if not db_expense:
        raise HTTPException(status_code=404, detail="Expense not found")
    return db_expense

@router.get("/expenses/total")
def get_total(db: Session = Depends(get_db)):
    total = crud.get_total_expenses(db)
    if total is None:
        raise HTTPException(status_code=404, detail="No expenses found")
    return {"total": total or 0}

@router.get("/expenses/category/{category_name}", response_model=list[schemas.Expense])
def read_expenses_by_category(category_name: str, db:Session = Depends(get_db)):
    expenses = crud.get_expense_by_category(db, category_name)
    if not expenses:
        raise HTTPException(status_code=404, detail="No expenses found for this category")
    return expenses

# income endpoints

@router.post("/incomes/", response_model=schemas.Income)
def create_income(income: schemas.IncomeCreate, db: Session = Depends(get_db)):
    return crud.create_income(db, income)

@router.get("/incomes/", response_model=list[schemas.Income])
def get_incomes(db: Session = Depends(get_db)):
    return crud.get_incomes(db)

@router.delete("/incomes/{income_id}", response_model=schemas.Income)
def delete_income(income_id: int, db: Session = Depends(get_db)):
    db_income = crud.delete_income(db, income_id)
    if not db_income:
        raise HTTPException(status_code=404, detail="Income not found")
    return db_income

@router.get("/incomes/total")
def get_total_income(db: Session = Depends(get_db)):
    total = crud.get_total_income(db)
    if total is None:
        raise HTTPException(status_code=404, detail="No income found")
    return {"total": total or 0}

@router.get("/balance/")
def get_balance(db: Session = Depends(get_db)):
    total_expenses = crud.get_total_expenses(db) or 0
    total_income = crud.get_total_income(db) or 0
    balance = total_income - total_expenses
    return {"balance": balance}
