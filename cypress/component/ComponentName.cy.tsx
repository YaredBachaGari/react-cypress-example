import React from 'react'
import { mount } from 'cypress/react18'
import Button from "../../src/Components/Button/Button"


describe('ComponentName.cy.tsx', () => {
  it('playground', () => {
    mount(<Button label={'click'} color={'blue'}/>)
    cy.get('button').should("have.text", 'click')
  })
  it('check if myfn is getting called' ,()=>{
    const replacedmyfn= cy.stub().as('bnmbmb')
    mount(<Button label={'click'} color={'blue'} onClick={replacedmyfn}/>)
    cy.get('button').click()
   cy.get('@bnmbmb').should("have.been.called", 1)
  })
})