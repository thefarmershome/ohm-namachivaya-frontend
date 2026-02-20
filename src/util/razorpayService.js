import PaymentController from '../Controller/paymentController';
import ToastService from './validationAlerts/toastService';

class RazorpayService {
  constructor() {
    this.loadRazorpayScript();
  }

  // Load Razorpay script dynamically
  loadRazorpayScript() {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  // Initialize Razorpay payment
  async initializePayment(paymentData) {
    try {
      // Ensure Razorpay script is loaded
      await this.loadRazorpayScript();

      if (!window.Razorpay) {
        throw new Error('Razorpay SDK failed to load');
      }

      // Create order on backend
      const orderResponse = await PaymentController.postPaymentOrder({
        amount: paymentData.amount,
        currency: paymentData.currency || 'INR',
        receipt: `receipt_${Date.now()}`,
      });

      const parsedResponse = JSON.parse(orderResponse);
      
      if (!parsedResponse.data || !parsedResponse.data.data) {
        throw new Error('Invalid order response from server');
      }

      const orderData = parsedResponse.data.data;

      // Razorpay options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "The Farmer's Home",
        description: paymentData.description || "Payment for your order",
        order_id: orderData.id,
        prefill: {
          name: paymentData.customerName || '',
          email: paymentData.customerEmail || '',
          contact: paymentData.customerPhone || '',
        },
        notes: {
          address: paymentData.address || '',
          order_id: paymentData.orderId || `order_${Date.now()}`,
        },
        theme: {
          color: "#3399cc"
        },
        handler: async (response) => {
          try {
            // Verify payment on backend
            const verifyResponse = await PaymentController.postPaymentVerified({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            const parsedVerifyResponse = JSON.parse(verifyResponse);
              console.log(parsedVerifyResponse,"parsedVerifyResponse");
            if (parsedVerifyResponse?.data?.success) {
              ToastService.successmsg('Payment successful!');
              if (paymentData.onSuccess) {
                paymentData.onSuccess(response, parsedVerifyResponse);
              }
            } else {
              ToastService.errormsg('Payment verification failed');
              if (paymentData.onError) {
                paymentData.onError('Payment verification failed');
              }
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            ToastService.errormsg('Payment verification failed');
            if (paymentData.onError) {
              paymentData.onError('Payment verification failed');
            }
          }
        },
        modal: {
          ondismiss: () => {
            if (paymentData.onDismiss) {
              paymentData.onDismiss();
            }
          }
        }
      };

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Razorpay initialization error:', error);
      ToastService.errormsg('Payment initialization failed');
      if (paymentData.onError) {
        paymentData.onError('Payment initialization failed');
      }
    }
  }

  // Format amount for Razorpay (convert to paise for INR)
  formatAmount(amount, currency = 'INR') {
    if (currency === 'INR') {
      return Math.round(amount * 100); // Convert to paise
    }
    return Math.round(amount * 100); // Convert to smallest currency unit
  }
}

export default new RazorpayService();
