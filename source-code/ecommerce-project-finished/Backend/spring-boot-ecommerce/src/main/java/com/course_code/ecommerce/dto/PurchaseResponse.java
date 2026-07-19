package com.course_code.ecommerce.dto;

//@Data
//public class PurchaseResponse {
//
//    // Alternative you can use @NonNull annotation instead of final
//    private final String orderTrackingNumber;
//}

// here you can use record instead
public record PurchaseResponse(String orderTrackingNumber) {

}

