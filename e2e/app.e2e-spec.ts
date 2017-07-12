import { HeroTourPage } from './app.po';

describe('hero-tour App', () => {
  let page: HeroTourPage;

  beforeEach(() => {
    page = new HeroTourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
