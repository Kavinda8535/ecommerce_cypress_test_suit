class LoginPage {
    // Selectors (use data attributes or stable attributes where possible) In here its id's
    emailField = '#email';
    passwordField = '#pass';
    signInButton = '#send2';
  
    // Redirecting to the Login from the Base URL...
    visitLogin() {
      cy.visit('/customer/account/login/');
    }
  
    enterEmail(email) {
      cy.get(this.emailField).clear().type(email);
    }
  
    enterPassword(password) {
      cy.get(this.passwordField).clear().type(password);
    }
  
    clickSignIn() {
      cy.get(this.signInButton).click();
    }
  
    login(email, password) {
      this.enterEmail(email);
      this.enterPassword(password);
      this.clickSignIn();
    }
  }
  
  export default LoginPage;
  