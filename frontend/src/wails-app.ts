import { Events } from "./wails.ts";
import { GreetService } from "../bindings/changeme/index.ts";

import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("wails-app")
export class WailsApp extends LitElement {
  @state() name = "World";

  static styles = css`
    :host { display:block; }
  `;

  async greet() {
    const result = await GreetService.Greet(this.name);
    console.log(result);
  }

  render() {
    return html`
      <button @click=${this.greet}>Greet</button>
      <input .value=${this.name} @input=${(e: Event) => {
        this.name = (e.target as HTMLInputElement).value;
      }} />
    `;
  }
}
