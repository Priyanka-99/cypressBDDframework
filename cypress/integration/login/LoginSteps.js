import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('User navigates to facebook website',()=>{

    cy.visit(Cypress.env('testurl'));
    return console.log('@Given -- User navigates to facebook website');
});

When('User validates the homepage title',()=>{

    return console.log('@When -- User validates the homepage title');
});

Then('User entered valid username',()=>{

    return console.log('@Then -- User entered valid username');
});

And('User entered valid password',()=>{

    return console.log('@Then -- User entered valid password');
});

Then('User should be successfully logged in to website',()=>{

    return console.log('@Then -- User should be successfully logged in to website');
});