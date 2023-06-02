export class todoPage{

    navigate()
    {

        cy.visit('https://example.cypress.io/todo') 
    }
    addItem(newItem)
    {
        cy.get('[data-test="new-todo"]').type(`${newItem} {enter}`);
    }

    validateActiveItems(activeItems)
    {
        cy.get('.footer span strong').should('have.text',activeItems)
    }
    validateDisplayedActiveItems(items)
    {
       cy.get('.todo-list').children('li').should('have.length',items)
    }

    clickAll()
    {
        cy.get('.selected').click()
    }
    clickActive()
    {
        cy.get('.filters > :nth-child(2) > a').click();
    }
    clickCompleted()
    {
        cy.get('.filters > :nth-child(3) > a').click();
    }
    clickClearCompleted()
    {
        cy.get('.clear-completed').click();
    }
  
}