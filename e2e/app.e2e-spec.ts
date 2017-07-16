import { PlatziAngular4PlatzisquarePage } from './app.po';

describe('platzi-angular4-platzisquare App', () => {
  let page: PlatziAngular4PlatzisquarePage;

  beforeEach(() => {
    page = new PlatziAngular4PlatzisquarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
