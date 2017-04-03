import { BandDashboardPage } from './app.po';

describe('band-dashboard App', () => {
  let page: BandDashboardPage;

  beforeEach(() => {
    page = new BandDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
