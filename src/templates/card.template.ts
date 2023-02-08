import { html } from "sg";

export default (header: string, innerHTML: string) => html`
  <sg-card style="height: auto; padding: 0; background: hsl(0, 0%, 99%)">
    <awesome-grid rows="auto 1fr">
      <awesome-grid-item style="background: hsl(0, 0%, 95%)">
        <h2>${header}</h2>
      </awesome-grid-item>
      <awesome-grid-item .innerHTML=${innerHTML}></awesome-grid-item>
    </awesome-grid>
  </sg-card>
`;
