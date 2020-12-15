import { html, fixture, expect } from '@open-wc/testing';

import './header.element';

describe('HeaderElement', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <header-element></header-element>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
