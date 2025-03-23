export type Book = {
    author_name?: Array<string>;
    title: string;
    author_key?: Array<string>;
    key: string;
  };
  
  export type SearchBook = {
    docs: Array<Book>;
    numFound: number;
    start: number;
  };
  