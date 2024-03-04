package com.hexaware.ecommerce.service;

import java.util.List;

import com.hexaware.ecommerce.dto.PaymentDTO;
import com.hexaware.ecommerce.entity.Payment;

public interface IPaymentService {
	public Payment addPayment(PaymentDTO paymentDTO);
    public Payment updatePayment(PaymentDTO paymentDTO);
    public String deletePaymentById(int paymentId);
    public PaymentDTO getPaymentById(int paymentId);
    public List<Payment> getAllPayment();
}
