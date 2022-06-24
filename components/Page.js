import { Box, Divider, FormGroup, Grid, Stack, TextField, Typography, Button } from '@mui/material'

const Page = () => {
    return (
        <Stack sx={{ border: '1px ' }}
            direction='column'
            spacing={2}
            padding={8}>
            <Box sx={{
                backgroundColor: 'white',
                color: 'black',
                height: '200px',
                width: '1100px',
                borderRadius: 2,
            }}> <Typography variant='h6' align='left'>
                    System Specification</Typography>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={60}>Model</Box>
                    <Box marginRight={48}>PB-BPX1</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={60}>System Rating</Box>
                    <Box marginRight={48.6}>1100 VA</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={60}>Capacity</Box>
                    <Box marginRight={48}>1024 Wh</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={60}>Battery Type</Box>
                    <Box marginRight={46}>Lithium ion</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={60}>Battery Time</Box>
                    <Box marginRight={40}>3hr @ 400W Load</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={60}>Weight</Box>
                    <Box marginRight={50}>20 Kg</Box>
                </Box>

            </Box>
            <Box sx={{
                backgroundColor: 'white',
                color: 'black',
                height: '300px',
                width: '1100px',
                borderRadius: 2,
            }}><Typography variant='h6' align='left'>
                    System Details</Typography>
                <Stack direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}>
                    <Box sx={{
                        backgroundColor: 'white',
                        height: '200px',
                        width: '550px'
                    }}>Subscription tenure</Box>
                    <Box sx={{
                        backgroundColor: 'white',
                        height: '200px',
                        width: '550px',
                    }}><Grid container direction='column' alignItems='center' justify='center' >
                            <FormGroup row>
                                <TextField label='Enter Promo Code' variant='outlined' size='small' />
                                <Button variant="contained" color="primary" size='small'>apply</Button></FormGroup></Grid>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{
                backgroundColor: 'white',
                color: 'black',
                height: '250px',
                width: '1100px',
                borderRadius: 2,
            }}><Typography variant='h6' align='left'>
                    Montaly Rentals</Typography>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={6}>
                        <Typography variant='h7'>Summary</Typography>
                    </Box>
                </Box>

                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={10}>Base Price</Box>
                    <Box marginRight={100}>₹ 1270</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={10}>Discount</Box>
                    <Box marginRight={100}><Typography color='green'>30%</Typography></Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={10}>Monthly Price</Box>
                    <Box marginRight={99.6}>₹ 889</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={10}>GST</Box>
                    <Box marginRight={100}>₹160</Box>
                </Box>
                <Box display='flex' flexDirection='row' justifyContent='space-between' >
                    <Box marginLeft={10}>Net Payable Amount</Box>
                    <Box marginRight={98.5}>₹ 1049</Box>
                </Box>
                <Box display='flex' flexDirection='row' marginLeft={120}>
                    <Button variant="contained" color="primary" size='Large'>Proceed</Button>
                </Box>

            </Box>
        </Stack>
    )
}