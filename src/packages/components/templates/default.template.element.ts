import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import '../molecules/header/header.element';
import '../../../routes';
import '../molecules/footer/footer.element';

@customElement('default-template')
class DefaultTemplateElement extends LitElement {
  public render(): TemplateResult {
    return html`
      <header-element></header-element>
      <routes-element></routes-element>
      <footer-element></footer-element>
    `;
  }
}
