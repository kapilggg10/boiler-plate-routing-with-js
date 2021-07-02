import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Products");
  }

  async getHtml() {
    return `
      <h1> Welcome to Product</h1>
    `
  }
}
