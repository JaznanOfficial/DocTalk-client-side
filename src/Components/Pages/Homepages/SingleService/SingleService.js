import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import "./SingleService.css";
import { ClockLoader } from "react-spinners";
import { css } from "@emotion/react";
import useFetch from './../../../CustomHooks/useFetch';

const SingleService = () => {


    const {data,loading,error} = useFetch('./singleService.json')
    console.log(data);



    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

    return (
        <div>
        {loading && <ClockLoader color='#FF6F00' size={'300'} loading={true} css={override} display={'block'} />}
        {error && <div>Error: {error.message}</div>}


        <Container className="single-service-container" style={{ padding: "5rem" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                        data.map(singleData => {
                        const {name,details,img} = singleData;
                        return (
                            <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }} style={{padding:'20px'}} className='card' >
                        <Box>
                            <img
                                src={img}
                                alt={`${name} img`}
                                width={'100rem'}
                            />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {details}
                            </Typography>
                        </CardContent>
                        <Box style={{textAlign:'center'}}>
                            <Button size="small" style={{cursor:'pointer'}}>See Doctors</Button>
                            
                        </Box>
                    </Card>
                </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    </div>
    );
};

export default SingleService;