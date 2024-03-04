package com.hexaware.ecommerce.service;

import java.util.List;
import java.util.Optional;

import javax.swing.text.html.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hexaware.ecommerce.dto.AdminDTO;
import com.hexaware.ecommerce.dto.PaymentDTO;
import com.hexaware.ecommerce.dto.SubCategoryDTO;
import com.hexaware.ecommerce.entity.Admin;
import com.hexaware.ecommerce.entity.Category;
import com.hexaware.ecommerce.entity.Customer;
import com.hexaware.ecommerce.entity.Order;
import com.hexaware.ecommerce.entity.OrderItem;
import com.hexaware.ecommerce.entity.Payment;
import com.hexaware.ecommerce.entity.Product;
import com.hexaware.ecommerce.entity.Seller;
import com.hexaware.ecommerce.entity.SubCategory;
import com.hexaware.ecommerce.exception.AdminNotFoundException;
import com.hexaware.ecommerce.exception.CategoryNotFoundException;
import com.hexaware.ecommerce.exception.CustomerNotFoundException;
import com.hexaware.ecommerce.exception.ProductNotFoundException;
import com.hexaware.ecommerce.exception.SellerNotFoundException;
import com.hexaware.ecommerce.exception.SubCategoryNotFoundException;
import com.hexaware.ecommerce.repository.AdminRepository;
import com.hexaware.ecommerce.repository.CategoryRepository;
@Service
public class AdminServiceImp implements IAdminService{
	@Autowired
	AdminRepository adminrepo;
	
	@Autowired
	IProductService productService;
	
	@Autowired
	ISellerService sellerService;
	
	@Autowired
	ICustomerService customerService;
	
	@Autowired
	ICategoryService categoryService;
	
	@Autowired
	ISubCategoryService subcategoryService;
	
	@Autowired
	IPaymentService paymentService;
	
	@Autowired
	IOrderService orderService;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	CategoryRepository categoryRepo;

	@Autowired
	IOrderItemService orderItemService;
	@Override
	public String addAdmin(AdminDTO admindto) {
		Admin admin=new Admin();
		admin.setAdminID(admindto.getAdminID());
		admin.setAdminName(admindto.getAdminName());
		admin.setEmail(admindto.getEmail());
		admin.setJoiningDate(admindto.getJoiningDate());
		admin.setPassword(passwordEncoder.encode(admindto.getPassword()));
		admin.setPhoneNumber(admindto.getPassword());
		admin.setPhoneNumber(admindto.getPhoneNumber());
		admin.setRole(admindto.getRole());
		admin.setUsername(admindto.getUsername());
		adminrepo.save(admin);
		return "New Admin records added.";
		 
	}

	@Override
	public List<Product> viewAllProducts() {
		return productService.getAllProduct();
	}

	@Override
	public String deleteProduct(int id) throws ProductNotFoundException {
		return productService.deleteProductById(id);
	}

	@Override
	public String deleteCategory(int id) throws CategoryNotFoundException {
		return categoryService.deleteCategoryById(id);
	}

	@Override
	public String deleteSubCategory(int id) throws SubCategoryNotFoundException {
		return subcategoryService.deleteSubCategoryById(id);
	}

	@Override
	public List<Customer> viewAllCustomer() {
		return customerService.getAllCustomer();
	}

	@Override
	public List<Seller> viewAllSeller() {

		return sellerService.getAllSeller();
	}

	@Override
	public List<Order> viewAllOrder() {
		return orderService.getAllOrder();
	}

	@Override
	public List<Payment> viewAllPayment() {
		return paymentService.getAllPayment();
	}

	@Override
	public String deleteSeller(int id) throws SellerNotFoundException {
		return sellerService.deleteSellerById(id);
	}

	@Override
	public List<Category> viewAllCategory() {
		return categoryService.getAllCategory();
	}

	@Override
	public List<SubCategory> viewAllSubCategory() {
		return subcategoryService.getAllSubCategory();
	}

	@Override
	public Payment addPayment(PaymentDTO payment) {
		return paymentService.addPayment(payment);
	}

	@Override
	public Category addCategory(Category category) {
		
		return categoryRepo.save(category);
	}

	@Override
	public SubCategory addSubCategory(SubCategoryDTO subcategorydto) {
		return subcategoryService.addSubCategory(subcategorydto);
	}


	 @Override
     public String deleteCustomer(int id) throws CustomerNotFoundException {
             return customerService.deleteCustomerById(id);
     }

	@Override
	public Optional<Admin> fetchAdminDetails(String username) throws AdminNotFoundException {
		
		return adminrepo.findByUsername(username);
	}


	@Override
	public Admin viewAdminById(int adminId) throws AdminNotFoundException {
		// TODO Auto-generated method stub
		return adminrepo.findById(adminId).orElse(null);
	}

	@Override
	public List<OrderItem> getOrderItemsByOrderId(int orderId) {
		return orderItemService.getOrderItemsByOrderId(orderId);
	}
	
     
}
