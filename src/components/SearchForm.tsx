"use client";

import { useState } from "react";
import useBooks from "@/hooks/useBooks";
import {
  Box,
  TextField,
  InputAdornment,
  Link,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm, Controller } from "react-hook-form";

import { useBookStore } from "@/providers/BookStoreProvider";

type SearchFormFields = {
  searchTerms: string;
};

const SearchForm = () => {
  const [searchTerms, setSearchTerms] = useState<string>("");
  const { data, isLoading } = useBooks({ searchTerms });
  const { addSearchTerm, searchTerms: stateSearchTerms } = useBookStore(
    (state) => state
  );

  const { control, handleSubmit } = useForm<SearchFormFields>({
    defaultValues: {
      searchTerms: "",
    },
  });

  const onSubmit = (data: SearchFormFields) => {
    setSearchTerms(data.searchTerms);
    addSearchTerm(data.searchTerms);
  };

  return (
    <Box marginBottom={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" display="inline-block" paddingRight="10px">
            Search:
          </Typography>
          <Controller
            control={control}
            name="searchTerms"
            render={({ field }) => (
              <TextField
                variant="outlined"
                sx={{ width: "600px" }}
                {...field}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            )}
          />
        </Box>
      </form>

      <Box marginBottom={2}>
        <Typography>Search History:</Typography>
        <Box component="ul">
          {stateSearchTerms.map((term, index) => (
            <Typography key={`${term}-${index}`} component="li">
              {term}
            </Typography>
          ))}
        </Box>
      </Box>

      {isLoading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Box component={"ol"}>
          {data?.map((book) => (
            <li key={book.key}>
              {book.title}
              {book.author_name &&
                book.author_name.map((name, index) => {
                  return (
                    <Link
                      marginLeft="5px"
                      marginRight="5px"
                      key={book.author_key?.[index]}
                      href={`/authors/${book.author_key?.[index]}`}
                    >
                      {name}
                    </Link>
                  );
                })}
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default SearchForm;
