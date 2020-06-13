import { html, fixture, expect } from '@open-wc/testing';

import './home.page.element';

describe('AppRootElement', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <home-page></home-page>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
