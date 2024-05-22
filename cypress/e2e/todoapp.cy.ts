describe('TODOapp', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/');
    });
  
    // Adding Task 
    it('Add Task', () => {
      cy.get('.new-todo').type('Study{enter}');
      cy.contains('Study').should('be.visible');
    });
  
    // Marking Task
    it('Mark Task as Complete', () => {
      cy.get('.new-todo').type('Laundry{enter}');
      cy.contains('Laundry').parent().find('.toggle').click();
      cy.contains('Completed').click();
      cy.contains('Laundry').should('be.visible');
    });
  
    // Delete Task
    it('Delete Task', () => {
      cy.get('.new-todo').type('Cleaning{enter}');
      cy.contains('Cleaning').parent().find('.destroy').click({ force: true });
      cy.contains('Cleaning').should('not.exist');
    });
  
    //Edit Task
    it('Edit Task', () => {
      const originalTaskText = 'Study';
      const updatedTaskText = 'Visit STOP AND SHOP';

      cy.get('.new-todo').type(`${originalTaskText}{enter}`);
      cy.get('[data-testid="todo-item-label"]').contains(originalTaskText).dblclick();
      cy.get('[data-testid="todo-item"]').find('input[type="text"]')
        .should('be.visible')
        .and('have.value', originalTaskText);
      cy.get('[data-testid="todo-item"]').find('input[type="text"]')
        .clear()
        .type(`${updatedTaskText}{enter}`);
      cy.get('[data-testid="todo-item-label"]').contains(updatedTaskText).should('be.visible');
    });
  
    // Filter Task
    it('Filter Tasks', () => {
      cy.get('.new-todo').type('Reading{enter}');
      cy.get('.new-todo').type('Go for a run{enter}');
      cy.contains('Active').click();
      cy.contains('Reading').should('be.visible');
      cy.contains('Go for a run').should('be.visible');
      cy.contains('Completed').click();
      cy.contains('Reading').should('not.exist');
      cy.contains('Go for a run').should('not.exist');
    });
  
    // Complete All Tasks
    it('Complete All Tasks', () => {
      cy.get('.new-todo').type('Dance{enter}');
      cy.get('.new-todo').type('Cook Dinner{enter}');
      cy.get('.toggle-all').click();
      cy.contains('Clear completed').should('be.visible');
    });
    });