import React from 'react';
import Header from './header';

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
    cy.get('button').contains('Acceuil').should('exist');
    cy.get('button').contains('Nos menus').should('exist');
    cy.get('button').contains('Connexion').should('exist');
    cy.get('button').contains("S'inscrire").should('exist');
  });

  it('clicks on Acceuil button and navigates to /', () => {
    cy.mount(<Header />);
    cy.get('button').contains('Acceuil').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('clicks on Nos menus button and navigates to /menu', () => {
    cy.mount(<Header />);
    cy.get('button').contains('Nos menus').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/menu');
  });

  it('clicks on Connexion button and navigates to /login', () => {
    cy.mount(<Header />);
    cy.get('button').contains('Connexion').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/login');
  });

  it('clicks on S\'inscrire button and navigates to /signup', () => {
    cy.mount(<Header />);
    cy.get('button').contains("S'inscrire").click();
    cy.url().should('eq', Cypress.config().baseUrl + '/signup');
  });
});