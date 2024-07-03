import React from 'react';
import Footer from './footer';

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />);
    cy.get('footer').should('exist');
    cy.get('h4').contains('À propos de nous').should('exist');
    cy.get('h4').contains('Contactez-nous').should('exist');
    cy.get('h4').contains('Suivez-nous').should('exist');
    cy.get('p').contains('contact@foodly.com').should('exist');
    cy.get('p').contains('+33 1 23 45 67 89').should('exist');
    cy.get('a[href="https://www.facebook.com"]').should('exist');
    cy.get('a[href="https://www.twitter.com"]').should('exist');
    cy.get('a[href="https://www.instagram.com"]').should('exist');
  });
});