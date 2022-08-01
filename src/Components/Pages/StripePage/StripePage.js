import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import PaymentPage from '../PaymentPage/PaymentPage';

const StripePage = () => {
    const stripePromise = loadStripe('pk_test_51LRzbYAMDIcwcvPooBdPWBaZ09NRclivm40bZVDjlz3zUiUcDhrHYQ5FDHSZm3XGiQuoEW4bVjVycNAwqJQXyHhC00sWaceOkD');
    return (
        <Elements stripe={stripePromise}> 
            <PaymentPage></PaymentPage>
        </Elements>
    );
};

export default StripePage;