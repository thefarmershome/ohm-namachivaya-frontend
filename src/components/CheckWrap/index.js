
import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import RazorpayService from "../../util/razorpayService";
import ToastService from "../../util/validationAlerts/toastService";
import './style.scss';
import PaymentController from '../../Controller/paymentController';
import OrderController from '../../Controller/OrderController';

const razorpayKeyId = process.env.REACT_APP_RAZORPAY_KEY_ID;

const CheckWrap = ({amount, cartItem, customerInfo}) => {

    console.log(razorpayKeyId, "razorpayKeyId");
    
    const push = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    // Handle Razorpay payment
    const handleRazorpayPayment = async () => {

        const totalAmount = amount.totalBillAmount.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        console.log(totalAmount,"totalAmount");
        if (!totalAmount) {
            ToastService.errormsg('Invalid amount');
            return;
        }           
         const user_uid = localStorage.getItem('loginUserUid');

        const createOrderData = {
            user_uid: user_uid,
            cart_data: cartItem.map(item => ({cart_uid: item.cart_uid, product_uid: item.product.product_uid, quantity: item.quantity})) || '',
            shippingAddress: customerInfo?.address || '',
        }
        const orderRes = await OrderController.postOrder(createOrderData);
        const createOrderRes = JSON.parse(orderRes).data;
        console.log(createOrderRes,"createOrderRes");

        setIsLoading(true);
            // try{
            console.log(customerInfo,"customerInfo");
            const orderData = {
                user_uid: user_uid || '',
                // cart_data: cartItem.map(item => ({cart_uid: item.cart_uid, product_uid: item.product.product_uid, quantity: item.quantity})) || '',
                amount: totalAmount,
                currency: amount.currency,
                receipt:`receipt_${Date.now()}`,
            }
            console.log(orderData,"orderData");
                const createPaymentOrderRes = await PaymentController.postPaymentOrder(orderData);
                const paymentOrderRes = JSON.parse(createPaymentOrderRes).data.data;
                console.log(paymentOrderRes,"paymentOrderRes");
            //     const parsRes = JSON.parse(res)
            //     const options = {
            //         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            //         amount: parsRes.data.data.amount,
            //         currency: parsRes.data.data.currency,
            //         name: "The Farmer's Home",
            //         description: "Test Transaction",
            //         order_id: parsRes.data.dataid, // <- REQUIRED!
            //         handler: async (res) => {                    
            //             const verifyRes = await PaymentController.postPaymentVerified(res);
            //             ToastService.successmsg(verifyRes.data.message);
            //         },
            //         theme: { color: "#3399cc" }
            //     };
    
            //     const razor = new window.Razorpay(options);
            //     razor.open();
    
            // }catch(error){
            //     console.log(error);
                
                // }
        console.log(process.env.REACT_APP_RAZORPAY_KEY_ID,"process.env.REACT_APP_RAZORPAY_KEY_ID");
        const paymentData = {
            amount: paymentOrderRes.amount,
            currency: paymentOrderRes.currency,
            description: 'Payment for your order from The Farmer\'s Home',
            customerName: customerInfo?.fname + ' ' + customerInfo?.lname || '',
            customerEmail: customerInfo?.email || '',
            customerPhone: customerInfo?.phone || '',
            address: customerInfo?.address || '',
            orderId: paymentOrderRes.id,
            key: razorpayKeyId,
            onSuccess: async (response, verifyResponse) => {
                console.log('Payment successful:', response);
                setIsLoading(false);

                const confirmOrderData = {
                    user_uid: user_uid,
                    order_uuids: createOrderRes.uuid,
                }
                const confirmOrderRes = await OrderController.confirmOrder(confirmOrderData);
                console.log(confirmOrderRes,"confirmOrderRes");
                // Redirect to order received page
                push('/order_received', { 
                    state: { 
                        paymentId: response.razorpay_payment_id,
                        orderId: response.razorpay_order_id,
                        amount: orderData.amount
                    }
                });
            },
            onError: (error) => {
                console.error('Payment failed:', error);
                setIsLoading(false);
            },
            onDismiss: () => {
                console.log('Payment dismissed');
                setIsLoading(false);
            }
        };

        await RazorpayService.initializePayment(paymentData);
    }
    return (
        <Grid className="cardbp mt-20">
            <Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className="payment-info">
                            <h4>Online Payment</h4>
                            <p>Pay securely using Razorpay. We accept all major credit/debit cards, UPI, net banking, and wallets.</p>
                            <div className="payment-methods">
                                <span className="method-tag">Credit/Debit Cards</span>
                                <span className="method-tag">UPI</span>
                                <span className="method-tag">Net Banking</span>
                                <span className="method-tag">Wallets</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className="formFooter mt-20">
                            <Button 
                                fullWidth 
                                className="cBtn cBtnLarge cBtnTheme mt-20" 
                                onClick={handleRazorpayPayment}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Processing...' : 'Pay with Razorpay'}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default CheckWrap;