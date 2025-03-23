import { Author } from "@/types/author";

export const getAuthor = async (authorId: string): Promise<Author> => {
  const response = await fetch(
    `https://openlibrary.org/authors/${authorId}.json`
  );
  const jsonResponse = (await response.json()) as Author;

  return jsonResponse;
};
