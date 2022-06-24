import {
    Box,
    Divider,
    FormGroup,
    Grid,
    Stack,
    TextField,
    Typography,
    Button,
} from "@mui/material";

import Layout from "../components/Layout";

import StackLeft from "../components/StackLeft";

import Image from "next/image";
import download from "../public/download.jpeg";
import StackRight from "./StackRight";

const Page = () => {
    return (
        <Stack direction="column" spacing={2} padding={8}>
            <Layout heading="System Specification">
                <Stack direction="row" gap={12}>
                    <Box py={4} ml={4}>
                        <Image src={download} width={150} height={200} />
                    </Box>
                    <Stack direction="row" gap={8} pt={6}>
                        <Stack direction="column" gap={1}>
                            <StackLeft>Model</StackLeft>
                            <StackLeft>System Rating</StackLeft>
                            <StackLeft>Capacity</StackLeft>
                            <StackLeft>Battery Type</StackLeft>
                            <StackLeft>Battery Time</StackLeft>
                            <StackLeft>Weight</StackLeft>
                        </Stack>
                        <Stack direction="column" gap={1}>
                            <StackRight>PB-BPX1</StackRight>
                            <StackRight>1100 VA</StackRight>
                            <StackRight>1024 Wh</StackRight>
                            <StackRight>Lithium Ion</StackRight>
                            <StackRight>3 Hours @400 W Load</StackRight>
                            <StackRight>20 KG</StackRight>
                        </Stack>
                    </Stack>
                </Stack>
            </Layout>

            <Layout heading="System Details">
                <Stack
                    direction="row"
                    spacing={2}
                    divider={<Divider orientation="vertical" flexItem />}
                    minHeight={200}
                >
                    <Box width="100%">Subscription tenure</Box>
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormGroup width="100%">
                            <TextField
                                label="Enter Promo Code"
                                variant="outlined"
                                size="small"
                                width="500px"
                                InputProps={{
                                    endAdornment: (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            sx={{
                                                zIndex: 1,
                                            }}
                                        >
                                            Apply
                                        </Button>
                                    ),
                                }}
                            ></TextField>
                        </FormGroup>
                    </Box>
                </Stack>
            </Layout>

            <Layout heading="Monthly Rentals">
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box marginLeft={6}>
                        <Typography variant="h7">Summary</Typography>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box marginLeft={10}>Base Price</Box>
                    <Box marginRight={100}>₹ 1270</Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box marginLeft={10}>Discount</Box>
                    <Box marginRight={100}>
                        <Typography color="green">30%</Typography>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box marginLeft={10}>Monthly Price</Box>
                    <Box marginRight={99.6}>₹ 889</Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box marginLeft={10}>GST</Box>
                    <Box marginRight={100}>₹160</Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box marginLeft={10}>Net Payable Amount</Box>
                    <Box marginRight={98.5}>₹ 1049</Box>
                </Box>
                <Box display="flex" flexDirection="row" marginLeft={120}>
                    <Button variant="contained" color="primary" size="Large">
                        Proceed
                    </Button>
                </Box>
            </Layout>
        </Stack>
    );
};

export default Page;
