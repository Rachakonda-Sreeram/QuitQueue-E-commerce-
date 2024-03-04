package com.hexaware.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.ecommerce.dto.ProductDTO;
import com.hexaware.ecommerce.dto.SellerDTO;
import com.hexaware.ecommerce.dto.SubCategoryDTO;
import com.hexaware.ecommerce.entity.Category;
import com.hexaware.ecommerce.entity.Order;
import com.hexaware.ecommerce.entity.Product;
import com.hexaware.ecommerce.entity.Seller;
import com.hexaware.ecommerce.exception.ProductNotFoundException;
import com.hexaware.ecommerce.exception.SellerNotFoundException;
import com.hexaware.ecommerce.exception.SubCategoryNotFoundException;
import com.hexaware.ecommerce.entity.SubCategory;

public interface ISellerService {
	public String login(String username, String password);
	public SellerDTO registerSeller(SellerDTO sellerDTO);
    public Seller updateSeller(SellerDTO sellerDTO) throws SellerNotFoundException;
    public String deleteSellerById(int sellerId) throws SellerNotFoundException;
    public List<Seller> getAllSeller();
	SellerDTO getSellerById(int sellerId) throws SellerNotFoundException;
	public List<Order> getAllOrder();
	public List<Product> getAllProduct();
	public List<Category> getAllCategory();
	public List<SubCategory> getAllSubCategory();
	public Product addProduct(ProductDTO productdto);
	public Product updateProduct(ProductDTO productdto) throws ProductNotFoundException;
	public String deleteProduct(int id) throws ProductNotFoundException;
	public Product getProductbyName(String name) throws ProductNotFoundException;
	public ProductDTO getProductById(int id) throws ProductNotFoundException;
	public ProductDTO markProductOutOfStock(int sellerId, int productId) throws ProductNotFoundException;
	public Optional<Seller> fetchSellerDetails(String username) throws SellerNotFoundException;
	public List<Product> viewMyProducts(int sellerId) throws ProductNotFoundException;
	public SubCategoryDTO getSubcategoryById(int subCategoryId) throws SubCategoryNotFoundException;
	public List<Integer> getOrdersBySellerId(int sellerId);
	public List<Integer> getPaymentsOfSeller(int sellerId);



}
