import React from 'react';
import Menu from './page';

describe('<Menu />', () => {
  it('renders menu data from API', () => {
    const menuData = {
      entrees: [
        {
          title: 'Ravioles de foie gras',
          description: 'Accompagnés de leur crème à la truffe',
          price: 25,
        },
        {
          title: 'Caviar osciètre',
          description: 'Sur blini à la farine de blé noir',
          price: 35,
        },
        {
          title: 'Homard et espuma de potiron',
          description: 'Mariné aux zestes d\'orange',
          price: 20,
        }
      ],
      plats: [
        {
          title: 'Noix de coquilles Saint-Jacques',
          description: 'Sur lit de purée de céleri-rave',
          price: 40,
        },
        {
          title: 'Langoustine poêlée',
          description: 'Purée de patate douce',
          price: 35,
        },
        {
          title: 'Mijoté de queue de boeuf',
          description: 'Et riz sauvage aux zestes de citron',
          price: 44,
        }
      ],
      desserts: [
        {
          title: 'Macaron noisette et chocolat',
          description: 'Glace au caramel brun et sel de Guérande',
          price: 18,
        },
        {
          title: 'Baba au rhum revisité',
          description: 'Avec son coulis de citron',
          price: 22,
        },
        {
          title: 'Tarte au citron meringuée',
          description: 'Déstructurée',
          price: 23,
        }
      ]
    };

    cy.intercept('/api/fetchMenu', { menu: menuData }).as('fetchMenu');

    cy.mount(<Menu />);

    cy.wait('@fetchMenu').then(() => {
    });
  });
});
