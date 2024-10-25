describe('Test formulaire d\'ajout', () => {
  let email = Math.random().toString(36).substring(2, 15) + '@gmail.com'
  it('passes', () => {
    cy.visit('http://testing.adrardev.fr/addUser')
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type(email)
    cy.get('input[name="mdp"]').type('!P4sSw0rD!')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
  })
  it(' notpasses', () => {
    cy.visit('https://testing.adrardev.fr/addUser')
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type(email)
    cy.get('input[name="mdp"]').type('!P4sSw0rD!')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Les informations sont incorrectes")
  })
})
// describe('register', () => {
//   it('addUser', () => {
//     cy.visit('https://testing.adrardev.fr/addUser')
//     cy.get('input[name="nom"]').type('DOE')
//     cy.get('input[name="prenom"]').type('John')
//     cy.get('input[name="mail"]').type(Math.random().toString(36).substring(2, 15) + '@gmail.com')
//     cy.get('input[name="mdp"]').type('!P4sSw0rD!')
//     cy.get('input[type="submit"]').click()
//     cy.get('#msgzone').invoke("text").then((text => {
//       //paramétre JSON (nom du test, date, statut)
//       const name = 'addUser';
//       let date = new Date()
//       date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
//       const url = "https://testing.adrardev.fr/api/addTest"
//       let json = '';
//       if (text == "Le compte a été ajouté en BDD") {
//         const valid = true
//         json = JSON.stringify({ name: name, valid: valid, date: date })
//       } else if (text == "Les informations sont incorrectes") {
//         const valid = false
//         json = JSON.stringify({ name: name, valid: valid, date: date })
//       }
//       cy.request({
//         method: 'POST',
//         url: url,
//         body: json,
//       });
//     }))
//   })
// })
