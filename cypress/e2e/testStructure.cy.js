///<reference types="cypress" />

describe('Context: My firtst Test', () =>{
    before(() =>{
        // runs onec before all test cases in the describe block, like befor testNG
    })
    beforeEach(() => {
        // run before each test case
        cy.clearCookies();
    })
    after(() =>{
        // similar to after class TestNG runs ones
    })
    afterEach(() =>{
        //similar to afterMethod in testNg
    })
    it('opening a web app', () =>{
        cy.visit('/registration_form');

    })
})