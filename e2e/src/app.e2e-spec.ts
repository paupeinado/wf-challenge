import { AppPage } from './app.po';
import {by, browser, logging, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('');
    expect(page.getTitleText()).toEqual('Places');
  });

  it('should navigate to first Post', () => {
    page.getFirstPost().click();
    browser.getCurrentUrl().then((url) => {
      expect(url).toMatch(/\S+show\/\d+/);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
