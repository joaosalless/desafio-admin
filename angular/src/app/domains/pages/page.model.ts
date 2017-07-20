export class Page {

  slug?: any = '';
  title?: any = '';

  constructor(page?: Page) {
    Object.assign(this, page);
  }
}
