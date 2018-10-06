import moment from 'moment';

const allowedDateStart = moment().date(5);
const allowedDateEnd = moment(allowedDateStart).add(7, 'days');

const component = {
  template: `<vue-pikaday 
      v-model="date" 
      :auto-default="true"
      :options="options" 
      data-vue-pikaday 
    ></vue-pikaday>`,
  data: {
    options: {
      format: 'YYYY/MM/DD',
      minDate: allowedDateStart.toDate(),
      maxDate: allowedDateEnd.toDate()
    }
  }
};

describe('Component', () => {
  before(() => cy.mount(component));

  it('have current date filled by default', () => {
    let testDate = moment();

    if (testDate >= allowedDateEnd) {
      testDate = allowedDateEnd;
    }

    if (testDate <= allowedDateStart) {
      testDate = allowedDateStart;
    }

    cy.get('[data-vue-pikaday]').should('have.value', testDate.format('YYYY/MM/DD'));
  });

  it('have custom display format', () => {
    cy.get('[data-vue-pikaday]').as('picker').click();
    cy.get(`[data-day="${allowedDateStart.date()}"] button`).click();
    cy.get('@picker').should('have.value', allowedDateStart.format('YYYY/MM/DD'));
  });

  it('restricts dates selection to current week', () => {
    cy.get('[data-vue-pikaday]').as('picker').click();
    cy.get(`[data-day="${moment(allowedDateStart).subtract(1, 'day').date()}"]`).should('have.class', 'is-disabled');

    cy.get('@picker').click();
    cy.get(`[data-day="${moment(allowedDateStart).add(8, 'days').date()}"]`).should('have.class', 'is-disabled');

    const plus5Days = moment(allowedDateStart).add(5, 'days');

    cy.get('@picker').click();
    cy.get(`[data-day="${plus5Days.date()}"]`).should('not.have.class', 'is-disabled');
    cy.get(`[data-day="${plus5Days.date()}"] button`).click();
    cy.get('@picker').should('have.value', plus5Days.format('YYYY/MM/DD'));
  });
});
