import { RecordLabelPage } from './app.po';

describe('record-label App', () => {
  let page: RecordLabelPage;

  beforeEach(() => {
    page = new RecordLabelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
