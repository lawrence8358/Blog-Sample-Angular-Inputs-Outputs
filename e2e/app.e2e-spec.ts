import { AngularBlogSampleInputsOutputsPage } from './app.po';

describe('angular-blog-sample-inputs-outputs App', () => {
  let page: AngularBlogSampleInputsOutputsPage;

  beforeEach(() => {
    page = new AngularBlogSampleInputsOutputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
