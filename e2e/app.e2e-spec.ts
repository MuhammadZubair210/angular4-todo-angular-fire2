import { TodoFirePage } from './app.po';

describe('todo-fire App', () => {
  let page: TodoFirePage;

  beforeEach(() => {
    page = new TodoFirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
