package com.course_code.ecommerce.dto;

import com.course_code.ecommerce.entity.Address;
import com.course_code.ecommerce.entity.Customer;
import com.course_code.ecommerce.entity.Order;
import com.course_code.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
