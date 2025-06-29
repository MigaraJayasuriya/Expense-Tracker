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

@router.get("expenses/total")
def get_total(db: Session = Depends(get_db)):
    total = crud.get_total_expenses(db)
    if total is None:
        raise HTTPException(status_code=404, detail="No expenses found")
    return {"total": total or 0}