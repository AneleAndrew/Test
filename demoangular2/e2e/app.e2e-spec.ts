import { Demoangular2Page } from './app.po';

describe('demoangular2 App', function() {
  let page: Demoangular2Page;

  beforeEach(() => {
    page = new Demoangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
