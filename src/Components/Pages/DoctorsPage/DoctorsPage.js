import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";

const DoctorsPage = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data);

    const category = useParams()

    
    
    

    return (
        <Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   
                        <Grid item xs={4} sm={4} md={4}>
                        <Card
                        sx={{ maxWidth: 345 }}
                        style={{ padding: "20px" }}
                        className="card"
                    >
                        <Box>
                            <img src='' alt={``} width={"100rem"} />
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {}
                            </Typography>
                        </CardContent>
                        <Box style={{ textAlign: "center" }}>
                            <Link to={`/booking/${''}`}>
                                <Button
                                    size="small"
                                    color="error"
                                    style={{
                                        cursor: "pointer",
                                        color: "#F1386A",
                                        borderColor: "#F1386A",
                                    }}
                                >
                                    Book This Doctor
                                </Button>
                            </Link>
                        </Box>
                    </Card>
                        </Grid>
              
                </Grid>
            </Container>
        </Box>
    );
};

export default DoctorsPage;
