import { LitElement, html, customElement, css, TemplateResult } from 'lit-element';

@customElement('menu-element')
export class MenuElement extends LitElement {
  static get styles() {
    return [css``];
  }

  public render(): TemplateResult {
    return html`
      <div>
        <mwc-button id="button" raised label="Open Menu"></mwc-button>
        <mwc-menu absolute x="50" y="100" id="menu">
          <mwc-list-item>Item 0</mwc-list-item>
          <mwc-list-item>Item 1</mwc-list-item>
          <mwc-list-item>Item 2</mwc-list-item>
          <mwc-list-item>Item 3</mwc-list-item>
        </mwc-menu>
      </div>
    `;
  }
}
