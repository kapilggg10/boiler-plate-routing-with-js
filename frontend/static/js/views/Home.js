import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    try {
      const res = await fetch('/static/html/home.html');
      const data = await res.text();
      return data;
    } catch (error) {
      return "Something Went Wrong!";
    }
  }
}
