package com.hexaware.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.ecommerce.dto.CustomerDTO;
import com.hexaware.ecommerce.entity.CartItem;
import com.hexaware.ecommerce.entity.Category;
import com.hexaware.ecommerce.entity.Customer;
import com.hexaware.ecommerce.entity.Order;
import com.hexaware.ecommerce.entity.Product;
import com.hexaware.ecommerce.entity.SubCategory;

import com.hexaware.ecommerce.exception.CustomerNotFoundException;
import com.hexaware.ecommerce.exception.OrderNotFoundException;
import com.hexaware.ecommerce.exception.ProductNotFoundException;


public interface ICustomerService {
	public String registerCustomer(CustomerDTO customerDTO);
    public Customer updateCustomer(CustomerDTO customerDTO) throws CustomerNotFoundException ;
    public String deleteCustomerById(int customerId) throws CustomerNotFoundException ;
    public CustomerDTO getCustomerById(int customerId)throws CustomerNotFoundException ;
    public List<Customer> getAllCustomer();

    public List<Product> getAllProduct();
    public List<Category> getAllCategory();
    public List<SubCategory> getAllSubCategory();
    public Product getProductByName(String name);
    public Category getCategorybyName(String name);
    public SubCategory getSubCategoryByName(String name);
    public String addProductToCustomerCart(int customerId, int productId, int quantity) throws ProductNotFoundException;
    public List<CartItem> viewCartitems(int customerId);

    
    public List<Product> getProductsByBrand(String brand);
    public List<Product> getProductsByPriceRange(double min,double max);
	public Optional<Customer> fetchCustomerDetails(String username)throws CustomerNotFoundException ;
	public String deleteProductFromCustomerCart(int customerId, int productId);
	public List<Product> viewProductsBySubCategoryName(String subcategoryName);
	public List<Order> viewOrderByCustomerId(int customerId);
	public String sendingOTP(String username, String phoneNumber);
	public String placeOrder(int customerId, String paymentMethod, String otp)throws ProductNotFoundException ;

}
