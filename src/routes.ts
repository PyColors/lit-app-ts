import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import { Router } from '@vaadin/router';

import './packages/components/pages/home/home.page.element';
import './packages/components/pages/about/about.page.element';
import './packages/components/pages/login/login.page.element';
import './packages/components/pages/not-found/not.found.page.element';

@customElement('routes-element')
class RoutesElement extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/about', component: 'about-page' },
      { path: '/login', component: 'login-page' },
      { path: '(.*)', component: 'not-found-page' },
    ]);
  }

  protected render(): TemplateResult {
    return html`
      <div id="outlet"></div>
    `;
  }
}
