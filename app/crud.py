from sqlalchemy.orm import Session
from sqlalchemy import func
from . import models, schemas

def create_expense(db:Session, expense: schemas.ExpenseCreate):
    db_expense = models.Expense(**expense.model_dump())
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense

def get_expenses(db: Session):
    return db.query(models.Expense).all()

def delete_expense(db: Session, expense_id: int):
    db_expense = db.query(models.Expense).filter(models.Expense.id == expense_id).first()
    if db_expense:
        db.delete(db_expense)
        db.commit()
    return db_expense

def get_total_expenses(db: Session):
    return db.query(models.Expense).with_entities(
        func.sum(models.Expense.amount).label("total")
    ).scalar()

def get_expense_by_category(db: Session, category: str):
    return db.query(models.Expense).filter(models.Expense.category == category).all()

# Income CRUD operations

def create_income(db: Session, income: schemas.IncomeCreate):
    db_income = models.Income(**income.model_dump())
    db.add(db_income)
    db.commit()
    db.refresh(db_income)
    return db_income

def get_incomes(db: Session):
    return db.query(models.Income).all()

def delete_income(db: Session, income_id: int):
    db_income = db.query(models.Income).filter(models.Income.id == income_id).first()
    if db_income:
        db.delete(db_income)
        db.commit()
    return db_income

def get_total_income(db: Session):
    return db.query(models.Income).with_entities(
        func.sum(models.Income.amount).label("total")
    ).scalar()



