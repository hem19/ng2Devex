import { Ng2DevexPage } from './app.po';

describe('ng2-devex App', () => {
  let page: Ng2DevexPage;

  beforeEach(() => {
    page = new Ng2DevexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
