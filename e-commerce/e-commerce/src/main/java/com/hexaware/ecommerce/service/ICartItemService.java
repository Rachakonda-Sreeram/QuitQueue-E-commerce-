package com.hexaware.ecommerce.service;

import java.util.List;

import com.hexaware.ecommerce.dto.CartItemDTO;
import com.hexaware.ecommerce.entity.CartItem;

public interface ICartItemService {
      public CartItem addCartItem(CartItemDTO cartItemDTO);
      public CartItem updateCartItem(CartItemDTO cartItemDTO);
      public String deleteCartItemById(int cartitemId);
      public CartItemDTO getCartItemById(int cartitemId);
      public List<CartItem> getAllCartItem();
}
