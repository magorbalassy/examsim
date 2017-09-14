import { XsimPage } from './app.po';

describe('xsim App', () => {
  let page: XsimPage;

  beforeEach(() => {
    page = new XsimPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
