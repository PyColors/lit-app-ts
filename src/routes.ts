import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import { connectRouter } from 'lit-redux-router';
import store from './store';

import './packages/components/pages/home/home.page.element';
import './packages/components/pages/about/about.page.element';

connectRouter(store);

@customElement('routes-element')
class RoutesElement extends LitElement {
  public render(): TemplateResult {
    return html`
      <lit-route><h1>404</h1></lit-route>
      <lit-route path="/" component="home-page"></lit-route>
      <lit-route path="/about" component="about-page"></lit-route>
    `;
  }
}
