import { html, fixture, expect } from '@open-wc/testing';

import './login.page.element';

describe('AppRootElement', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <login-page></login-page>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Login');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
