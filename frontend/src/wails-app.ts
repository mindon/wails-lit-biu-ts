import { Events } from "./wails.ts";

Events.On("time", (time) => {
  console.log("time", time.data);
});

import { GreetService } from "../bindings/changeme/index.ts";

import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("wails-app")
export class WailsApp extends LitElement {
  @state() accessor name = "World";
  @state() accessor message = "Hello World!";


  static styles = css`
    :host { display:block; }
  `;

  async greet() {
    this.message = await GreetService.Greet(this.name);
  }

  render() {
    return html`
      <input .value=${this.name} @input=${(e: Event) => {
        this.name = (e.target as HTMLInputElement).value;
    }} />
      <button @click=${this.greet}>Greet</button>
      <p>${this.message}</p>
    `;
  }
}
