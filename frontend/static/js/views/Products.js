import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Products");
  }

  async getHtml() {
    try {
      const res = await fetch('/static/html/products.html');
      const data = await res.text();
      return data;
    } catch (error) {
      return "Something Went Wrong!";
    }
  }
}
