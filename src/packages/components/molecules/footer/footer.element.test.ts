import { html, fixture, expect } from '@open-wc/testing';

import './footer.elementt';

describe('FooterElement', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <footer-element></footer-element>
    `);
  });

  it('renders a h1', () => {
    const p = element.shadowRoot.querySelector('p');
    expect(p).to.exist;
    expect(p.textContent).to.equal('Made with love by');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
