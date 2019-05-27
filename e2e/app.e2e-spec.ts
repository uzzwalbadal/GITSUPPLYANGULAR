import { supplycTemplatePage } from './app.po';

describe('supplyc App', function() {
  let page: supplycTemplatePage;

  beforeEach(() => {
    page = new supplycTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
