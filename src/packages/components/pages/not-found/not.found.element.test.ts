import { html, fixture, expect } from '@open-wc/testing';

import './not.found.element';

describe('NotFoundElement', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <not-found-page></not-found-page>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
