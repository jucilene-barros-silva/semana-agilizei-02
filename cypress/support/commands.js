// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin',() => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0kbEDoNDPnXSN49eg7MpZUPM5xa%2FGL4c03qlv1INn2KQlHtcsLRZ5SL%2BMdd9y6cWdRhQBKBkFN%2FQ%2FH71i1FofpAaxyIXD6qtaWoNfkCBDitcxr4ZFWXCA7FDCEV6HRklsE7VSOmvIRfypD9bxyNO0mK7dcpm%2FvLTh%2B76JbJmgIULhKL6xj3CYQxAVcrZxMGvOCNgGs0iJQHEdW9GHwwYNKSQG%2Fej0Lm1KEo1ZRGwvqL6gM9zbZuqlniHJUJffwyaTv6a8K0sbqsH%2Bn%2FrHwpmslyBq%2FqFndjl%2BDE1ZD%2FVXI0%2Fo2uHz%2F%2FnJkzVhMqxgIN6yj2hZtEsAJwwqZ3Z2tz6pdjdRPP%2F4KMDP4abyxJWLIqcJH47s1YCgsKEOEowwiBkCiBbu7y1Z0wvmk0mOhQfyxU%3D000318'
      )
})