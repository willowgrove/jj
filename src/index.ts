import "sg";
import { html, render } from "sg";
import { defineCustomElements as defineCustomLayoutElements } from "@awesome-elements/layout/loader";
import homeTemplate from "./templates/home.template";
import headerTemplate from "./templates/header.template";
import footerTemplate from "./templates/footer.template";

defineCustomLayoutElements();

const template = html`
  <sg-app id="app">
    ${headerTemplate} ${homeTemplate} ${footerTemplate}
  </sg-app>
`;

render(template, document.body);
