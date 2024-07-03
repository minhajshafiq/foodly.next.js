import React from 'react'
import Home from './page'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
    cy.get('button').contains('Explorez nos menus').should('exist');
    cy.get('a[href="/menu"]').should('exist');
    cy.get('button').contains('Commandez en ligne / livraison').should('have.length', 1);
    cy.get('a[href="/menu"]').should('exist');
  })
})