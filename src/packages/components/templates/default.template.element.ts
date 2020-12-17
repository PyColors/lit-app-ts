import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import '../molecules/header';
import '../../../routes';
import '../molecules/footer';

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
