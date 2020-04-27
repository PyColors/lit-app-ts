import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import './packages/components/templates/default.template.element';
import './packages/styles/style.css';

@customElement('app-root')
class AppRootElement extends LitElement {
  public render(): TemplateResult {
    return html`
      <default-template></default-template>
    `;
  }
}
