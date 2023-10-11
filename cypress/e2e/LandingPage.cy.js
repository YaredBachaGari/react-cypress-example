/* eslint-disable no-undef */
/// <reference types="Cypress"/>
import testData from "../fixtures/example.json";

describe("landing should render properly ", () => {
  //before
  //beforeEach
  afterEach("clean cookeies", () => {
    cy.clearAllCookies();
  });
  // before("do something first", () => {
  //   cy.addListener("ddd", () => {});
  // });
  beforeEach("visit page", () => {
   
  });
  it("logo should diplay", () => {
    ///cy.get("img.sc-bcXHqe.eFLKhS").should("be.visible");
    //cy.get(".sc-eDvSVe").contains("Welcome to Tasker");
  });
  it("user should be able login", () => {
    cy.login()
  });
  it("should display dashboard", () => {
    cy.login()
    cy.get(".sc-ksBlkl").should("contain", "All your tasks");
    cy.get(".sc-ilhmMj").should("have.length", 3);
    cy.get("div>div.sc-eDWCr.dhFjfN>div").should("have.length", 3);
    //cy.get('.sc-eDWCr.dhFjfN').should('have.length',3)
    cy.get(".sc-cUEOzv").click().contains("Add");
  });
});

describe("dashboard should  ", () => {
  it("logo should diplay", () => {});
  it("should display sign up link", () => {});
});


