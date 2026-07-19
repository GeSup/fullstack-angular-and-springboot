package com.course_code.ecommerce.service;

import com.course_code.ecommerce.dto.Purchase;
import com.course_code.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
