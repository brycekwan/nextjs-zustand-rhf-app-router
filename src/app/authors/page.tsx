import { Container, Typography } from "@mui/material";
import TopMenu from "@/components/TopMenu";
import AuthorForm from "@/components/AuthorForm";

export default function Authors() {
  return (
    <Container>
      <TopMenu />
      <Typography variant="h4" component="h1">
        Authors
      </Typography>
      <Typography variant="body1" paddingBottom={2}>
        This is a sample page for authors. It uses Formik and
        react-number-format to comma separate the book count field. On submssion
        the value of the formik form will be the float value of the entered
        value and not the string value. The values can be inspected in the
        console.
      </Typography>
      <AuthorForm />
    </Container>
  );
}
