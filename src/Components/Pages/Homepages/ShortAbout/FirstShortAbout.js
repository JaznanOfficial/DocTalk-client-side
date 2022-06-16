import React from 'react';

import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import circle from "../../../../images/circle.png";
import caduceus from "../../../../images/caduceus.png";
import './FirstShortAbout.css'

const FirstShortAbout = () => {
    return (
        <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 4, md: 12 }}
            justifyContent="center"
            alignItems="center"
            className="short-about"
        >
            <Grid item xs={2} md={4} className='first-grid-shortAbout'>
                <Box style={{textAlign:'center'} }>
                    <img
                        src={caduceus}
                        alt="img not found"
                        width={"80px"}
                        style={{
                            boxShadow: "2px 2px 10px #dddddd",
                            borderRadius: "50%",
                            padding: "30px",
                            position: "relative",
                            top: "-15px",
                            left: "135px",
                            xs:{position:'relative', left:'0px'}
                        }}
                    />
                    <img
                        src={circle}
                        alt="img not found"
                        width={"50%"}
                        style={{position: "relative", left: "-50px", top:'20px'}}
                    />
                    
                </Box>
            
                
            </Grid>
            <Grid item xs={4} md={3} style={{margin:'0'}}>
                <Box>
                    <h1 style={{color:'#5357CA', fontSize:'50px', textAlign:'left'}}>
                        25+ Years <br />
                        Of <br />
                        Experience
                    </h1>
                    <h4 style={{color:'#F17732', textAlign:'left'}}>DocTalk helps to improve your health.</h4>
                </Box>
            </Grid>
            <Grid item xs={4} md={4}   style={{margin:'0 20px'}}>
                <Box>
                    <Typography><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui nulla praesentium ratione, nostrum ipsum est. Illum ducimus natus repellat quia earum consequuntur minima, inventore ut animi architecto rem nihil itaque asperiores reiciendis accusantium veritatis labore quis possimus doloremque eaque ab culpa deleniti alias? At consequatur atque aperiam cum rem.</p></Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default FirstShortAbout;