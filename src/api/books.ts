import { Book, SearchBook } from "@/types/book";

const searchBooks = async (searchTerms: string): Promise<Array<Book>> => {
  const query = String(searchTerms).replace(/\s/g, "+");
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=10`
  );
  const jsonResponse = (await response.json()) as SearchBook;
  return jsonResponse.docs;
};

export { searchBooks };
