import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Contact Us");
  }

  async getHtml() {
    return `
      <h1> Welcome to Contact</h1>
    `
  }
}
