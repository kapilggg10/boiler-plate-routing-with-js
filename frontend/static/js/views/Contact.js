import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Contact Us");
  }

  async getHtml() {
    try {
      const res = await fetch('/static/html/contact.html');
      const data = await res.text();
      return data;
    } catch (error) {
      return "Something Went Wrong!";
    }
  }
}
