const { todoPage } = require("../page-objects/todo-page")

describe('add to do item ', () => {
  const todoObj=new todoPage();
  var todoList;
  beforeEach(() => {
    todoObj.navigate()
    cy.fixture('example').then(user=>{
      todoList=user.todoDefaultItems;
   });
  })

  it('two items exist by default', () => {
    todoObj.validateActiveItems(2)
    todoObj.validateDisplayedActiveItems(2)
    cy.get('.todo-list li').first().should('have.text', todoList[0])
    cy.get('.todo-list li').last().should('have.text', todoList[1])
  })
  it('add empty will not add items', () => {
    todoObj.validateActiveItems(2)
    todoObj.validateDisplayedActiveItems(2)
  })

  it('add new item to list', () => {
    const newItem = todoList.NewItem;
    todoObj. addItem(newItem)
    todoObj.validateActiveItems(3)
    todoObj.validateDisplayedActiveItems(3)
  })

  it('complete item in the list ', () => {
    cy.get('.todo-list li:first-child input').check()
    //click all 
    todoObj.clickAll();
    todoObj.validateDisplayedActiveItems(2)
    //click active
    todoObj.clickActive();
    todoObj.validateDisplayedActiveItems(1)
    //click completed
    todoObj.clickCompleted();
    todoObj.validateDisplayedActiveItems(1)
  
  })

  it('clear  completed ', () => {
    todoObj.validateDisplayedActiveItems(2)
    cy.get('.todo-list li:first-child input').check()
    todoObj.clickClearCompleted()
    todoObj.validateDisplayedActiveItems(1)
  
  })
})