import { CourseManagerPage } from './app.po';

describe('course-manager App', function() {
  let page: CourseManagerPage;

  beforeEach(() => {
    page = new CourseManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
