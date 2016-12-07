import { TennisHpPage } from './app.po';

describe('tennis-hp App', function() {
  let page: TennisHpPage;

  beforeEach(() => {
    page = new TennisHpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
