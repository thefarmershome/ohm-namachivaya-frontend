# Razorpay Payment Integration

This document explains the Razorpay payment integration implemented in The Farmer's Home web application.

## Overview

The payment system has been updated to use Razorpay for online payments instead of the previous card form. This provides a more secure and user-friendly payment experience.

## Changes Made

### 1. Dependencies
- Added `razorpay` package to handle payment processing

### 2. New Files Created
- `src/util/razorpayService.js` - Main Razorpay service utility

### 3. Files Modified
- `src/components/CheckWrap/index.js` - Updated to use Razorpay instead of card forms
- `src/components/CheckoutSection/index.js` - Updated payment method labels and integration
- `src/components/CheckWrap/style.scss` - Added styles for payment info section

## Setup Instructions

### 1. Environment Variables
Add the following environment variable to your `.env` file:

```env
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id_here
```

### 2. Razorpay Account Setup
1. Create a Razorpay account at https://razorpay.com
2. Get your Key ID from the Razorpay dashboard
3. Add the Key ID to your environment variables

### 3. Backend Integration
Ensure your backend has the following endpoints:
- `POST /create-order` - Creates a Razorpay order
- `POST /verify` - Verifies payment signature

## Features

### Payment Methods Supported
- Credit/Debit Cards
- UPI
- Net Banking
- Digital Wallets

### Security Features
- Server-side order creation
- Payment signature verification
- Secure token handling

## Usage

### For Card Payments
1. User selects "Online Payment (Razorpay)" option
2. Clicks "Pay with Razorpay" button
3. Razorpay checkout modal opens
4. User completes payment using preferred method
5. Payment is verified on the server
6. User is redirected to order confirmation page

### For Cash on Delivery
1. User selects "Cash On Delivery" option
2. Clicks "Proceed to Checkout" button
3. User is redirected to order confirmation page

## Error Handling

The integration includes comprehensive error handling for:
- Payment initialization failures
- Payment verification failures
- Network errors
- User cancellation

## Testing

### Test Mode
- Use Razorpay test credentials for development
- Test cards are available in Razorpay documentation

### Production
- Use live Razorpay credentials
- Ensure proper SSL certificates are in place

## API Integration

The service integrates with the existing payment controller:
- `PaymentController.postPaymentOrder()` - Creates Razorpay order
- `PaymentController.postPaymentVerified()` - Verifies payment

## UI/UX Improvements

- Clean, modern payment interface
- Clear payment method indicators
- Loading states during payment processing
- User-friendly error messages
- Responsive design for mobile devices

## Security Considerations

- Never expose Razorpay secret key in frontend
- Always verify payments on the server
- Use HTTPS in production
- Implement proper error logging
- Validate all payment data on the server

## Support

For issues related to:
- Razorpay integration: Check Razorpay documentation
- Backend API: Check payment controller implementation
- Frontend UI: Check component implementation
