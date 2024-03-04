package com.hexaware.ecommerce.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hexaware.ecommerce.dto.ProductDTO;
import com.hexaware.ecommerce.dto.SellerDTO;
import com.hexaware.ecommerce.dto.SubCategoryDTO;
import com.hexaware.ecommerce.entity.Product;
import com.hexaware.ecommerce.entity.Seller;
import com.hexaware.ecommerce.entity.SubCategory;
import com.hexaware.ecommerce.exception.ProductNotFoundException;
import com.hexaware.ecommerce.exception.SellerNotFoundException;
import com.hexaware.ecommerce.exception.SubCategoryNotFoundException;

import jakarta.transaction.Transactional;
@SpringBootTest
class ProductServiceImpTest {
	
	@Autowired
	IProductService productService;
	@Autowired
	ISellerService sellerService;
	@Autowired
	ISubCategoryService subCategoryService;
	@Test
	//@Transactional
	void testAddProduct() throws SubCategoryNotFoundException, SellerNotFoundException {
	//	fail("Not yet implemented");
		SellerDTO sellerDTO = sellerService.getSellerById(101);
		Seller seller = sellerService.updateSeller(sellerDTO);
		SubCategoryDTO subCategoryDTO = subCategoryService.getSubCategoryById(201);
		SubCategory subCategory = subCategoryService.updateSubCategory(subCategoryDTO);
		
		ProductDTO productdto = new ProductDTO(101,seller,"Checked Blue Shirt","https://shorturl.at/dkx01","Cotton Fabric",500,50,seller.getBusinessName(),LocalDateTime.now(),LocalDateTime.now(),subCategory);
		Product product = productService.addProduct(productdto);
		assertEquals(101,product.getProductId());
	}
	//@Transactional
	@Test
	void testUpdateProduct() throws SellerNotFoundException, SubCategoryNotFoundException, ProductNotFoundException {
		//fail("Not yet implemented");
		SellerDTO sellerDTO = sellerService.getSellerById(103);
		Seller seller = sellerService.updateSeller(sellerDTO);
		SubCategoryDTO subCategoryDTO = subCategoryService.getSubCategoryById(301);
		SubCategory subCategory = subCategoryService.updateSubCategory(subCategoryDTO);
		ProductDTO productdto = new ProductDTO(102,seller,"65-inch OLED TV","https://shorturl.at/pEHPY","Samsung’s innovative OLED",50000,5,seller.getBusinessName(),LocalDateTime.now(),LocalDateTime.now(),subCategory);
		Product product = productService.addProduct(productdto);
		ProductDTO productdto2 = new ProductDTO(102,seller,"65-inch OLED TV","https://shorturl.at/pEHPY","Samsung’s innovative OLED",65000,5,seller.getBusinessName(),LocalDateTime.now(),LocalDateTime.now(),subCategory);
		Product product2 = productService.updateProduct(productdto2);
		
		assertEquals(65000,product2.getPrice());
	}/*
	@Test
	void testDeleteProductById() throws SellerNotFoundException, SubCategoryNotFoundException, ProductNotFoundException {
		//fail("Not yet implemented");
		 SellerDTO sellerDTO = sellerService.getSellerById(102);
			Seller seller = sellerService.updateSeller(sellerDTO);
			SubCategoryDTO subCategoryDTO = subCategoryService.getSubCategoryById(202);
			SubCategory subCategory = subCategoryService.updateSubCategory(subCategoryDTO);
			ProductDTO productdto = new ProductDTO(103,seller,"RED T-SHIRT","https://shorturl.at/cjkv4","Full Sleeve",650,15,seller.getBusinessName(),LocalDateTime.now(),LocalDateTime.now(),subCategory);
			Product product = productService.addProduct(productdto);
			String delete = productService.deleteProductById(product.getProductId());
		 assertNotEquals(null,delete);
	}*/

	@Test
	//@Transactional
	void testGetProductById() throws SellerNotFoundException, SubCategoryNotFoundException, ProductNotFoundException {
		//fail("Not yet implemented");
		SellerDTO sellerDTO = sellerService.getSellerById(102);
		Seller seller = sellerService.updateSeller(sellerDTO);
		SubCategoryDTO subCategoryDTO = subCategoryService.getSubCategoryById(202);
		SubCategory subCategory = subCategoryService.updateSubCategory(subCategoryDTO);
		ProductDTO productdto = new ProductDTO(103,seller,"RED T-SHIRT","https://shorturl.at/cjkv4","Full Sleeve",650,15,seller.getBusinessName(),LocalDateTime.now(),LocalDateTime.now(),subCategory);
		Product product = productService.addProduct(productdto);
		ProductDTO productDTO2 = productService.getProductById(product.getProductId());
		assertEquals(103,productDTO2.getProductId());
		
	}

	@Test
	void testGetAllProduct() {
		//fail("Not yet implemented");
		List<Product> list = productService.getAllProduct();
		int size = list.size();
		assertNotEquals(0,size);
	}

}
