import { Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box display="flex" flexDirection="row">
        <Box marginTop={9} marginBottom={-5} marginLeft={7}>
          <Typography variant="h4" align="left">
            Request New System
          </Typography>
        </Box>
      </Box>
      <Page />
    </>
  );
}
