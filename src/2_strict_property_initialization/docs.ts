class Library {
  titles: string[] = ['Dog'];

  constructor() {}
}

const library = new Library();

const shortTitles = library.titles.filter(title => title.length < 5);
