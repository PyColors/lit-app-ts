import { LitElement, html, customElement, TemplateResult } from 'lit-element';
import { connectRouter, navigate } from 'lit-redux-router';
import store from './store';

import './packages/components/pages/home/home.page.element';
import './packages/components/pages/about/about.page.element';

import './packages/styles/style.css';

connectRouter(store);

@customElement('app-root')
class AppRootElement extends LitElement {
  public goToAbout(): void {
    store.dispatch(navigate('/about'));
  }

  public render(): TemplateResult {
    return html`
      <nav class="nav-bar">
        <a href="/">home</a>
        <a href="/about">about</a>
      </nav>
      <button @click="${this.goToAbout}">learn more about us</button>
      <lit-route><h1>404</h1></lit-route>
      <lit-route path="/" component="home-page"></lit-route>
      <lit-route path="/about" component="about-page"></lit-route>
    `;
  }
}
