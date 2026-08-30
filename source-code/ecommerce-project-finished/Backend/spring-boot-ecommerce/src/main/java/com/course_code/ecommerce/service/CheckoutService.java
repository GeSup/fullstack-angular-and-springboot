package com.course_code.ecommerce.service;

import com.course_code.ecommerce.dto.PaymentInfo;
import com.course_code.ecommerce.dto.Purchase;
import com.course_code.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntend(PaymentInfo paymentInfo) throws StripeException;
}
