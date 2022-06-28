import React from "react";
import "./PaymentPage.css";
import { Box, Card, CardContent, Container } from "@mui/material";
import payment from '../../../images/payment.jpg';


const PaymentPage = () => {
    return (
        <Container className="payment-box">
            <Box className="container" style={{ padding: "0 30px", width:'540px' }}>
                <Card sx={{ Width: 275 }} style={{margintBottom:'30px', boxShadow:'0 0 25px #ccc'}}>
                    <CardContent>
                        <img className="payment-img" src={payment} width='250px' alt="payment img" />
                    </CardContent>
                </Card>

                <Card style={{marginTop:'30px',  boxShadow:'0 0 25px #ccc'}}>
                    <div className="card p-3">
                        <div className="card-body border p-0">
                           
                            <div className="collapse show p-3 pt-0" id="collapseExample">
                                <div className="row">
                                    <div style={{textAlign:'left', margin:'5px 10px'}}>
                                       
                                        
                                    </div>
                                    <div className="col-lg-7">
                                        <form action="" className="form">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form__div">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder=" "
                                                        />
                                                        <label for="" className="form__label">
                                                            Card Number
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="form__div">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder=" "
                                                        />
                                                        <label for="" className="form__label">
                                                            MM / yy
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="form__div">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder=" "
                                                        />
                                                        <label for="" className="form__label">
                                                            cvv code
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form__div">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder=" "
                                                        />
                                                        <label for="" className="form__label">
                                                            name on the card
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="btn btn-primary w-100">
                                                        Sumbit
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <div className="col-12">
                    <div className="btn btn-primary payment">Make Payment</div>
                </div>
            </Box>
        </Container>
    );
};

export default PaymentPage;
