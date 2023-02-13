describe('Form', () => {
  it('submits the form', () => {
    cy.visit('/');
    
    cy.get('input[id="name"]').type('John Doe');
    cy.get('input[id="email"]').type('johndoe@example.com');
    cy.get('button[type="submit"]').click();
    
    cy.get('p').contains('Name: John Doe');
    cy.get('p').contains('Email: johndoe@example.com');
  });
});
