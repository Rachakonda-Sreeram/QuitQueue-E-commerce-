package com.hexaware.ecommerce.service;

import java.util.List;

import com.hexaware.ecommerce.dto.OrderDTO;
import com.hexaware.ecommerce.entity.Order;
import com.hexaware.ecommerce.entity.OrderItem;
import com.hexaware.ecommerce.exception.OrderNotFoundException;

public interface IOrderService {
	public Order addOrder(OrderDTO orderDTO);
    public Order updateOrder(OrderDTO orderDTO) throws OrderNotFoundException;
    public String deleteOrderById(int orderId) throws OrderNotFoundException;
    public OrderDTO getOrderById(int orderId) throws OrderNotFoundException;
    public List<Order> getAllOrder();

    
  
}
