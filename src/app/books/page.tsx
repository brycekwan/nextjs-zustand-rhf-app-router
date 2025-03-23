import { Container, Typography } from "@mui/material";
import TopMenu from "@/components/TopMenu";
import SearchForm from "@/components/SearchForm";

export default function Books() {
  return (
    <Container>
      <TopMenu />
      <Typography variant="h4" component="h1">
        Books
      </Typography>
      <Typography variant="body1" paddingBottom={2}>
        This page shows zustand in action and react query. React query will
        fetch once in the network tab with each unique search term. Reusing the
        search term will not cause a query but use the cache since the stale
        time is set to 5 minutes. React query has not been configured to persist
        across pages. The search history will show the last set of search terms
        used. It will persist even if navigating to the author page and back.
      </Typography>
      <SearchForm />
    </Container>
  );
}
