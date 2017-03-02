import { SimexFrontendPage } from './app.po';

describe('simex-frontend App', () => {
  let page: SimexFrontendPage;

  beforeEach(() => {
    page = new SimexFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
