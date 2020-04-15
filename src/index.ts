import { LitElement, html, customElement } from 'lit-element';
import './packages/components/pages/home/home.page.element';
import './packages/components/pages/about/about.page.element';

import './packages/styles/style.css';

@customElement('app-root')
class AppRootElement extends LitElement {
  render() {
    return html`
      <home-page />
      <about-page />
    `;
  }
}
