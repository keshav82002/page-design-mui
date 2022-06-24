import { Typography, Box } from "@mui/material";
import Page from "../components/Page";

export default function Home() {
  return (
    <Box bgcolor="#F7F7F7">
      <Box display="flex" flexDirection="row">
        <Box marginTop={9} marginBottom={-5} marginLeft={7}>
          <Typography variant="h4" align="left" fontWeight="bold">
            Request New System
          </Typography>
        </Box>
      </Box>
      <Page />
    </Box>
  );
}
