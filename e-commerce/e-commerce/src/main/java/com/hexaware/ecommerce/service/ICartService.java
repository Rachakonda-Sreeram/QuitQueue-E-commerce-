package com.hexaware.ecommerce.service;

import java.util.List;

import com.hexaware.ecommerce.dto.CartDTO;
import com.hexaware.ecommerce.entity.Cart;


public interface ICartService {
	 public Cart addCart(CartDTO cartDTO);
     public Cart updateCart(CartDTO cartDTO);
     public String deleteCartById(int cartId);
     public CartDTO getCartbyId(int cartId);
     public List<Cart> getAllCart();
}
