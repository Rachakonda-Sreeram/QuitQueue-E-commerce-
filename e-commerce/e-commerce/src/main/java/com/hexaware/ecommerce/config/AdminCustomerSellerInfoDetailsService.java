package com.hexaware.ecommerce.config;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.hexaware.ecommerce.entity.Admin;
import com.hexaware.ecommerce.entity.Customer;
import com.hexaware.ecommerce.entity.Seller;
import com.hexaware.ecommerce.repository.AdminRepository;
import com.hexaware.ecommerce.repository.CustomerRepository;
import com.hexaware.ecommerce.repository.SellerRepository;
@Component
public class AdminCustomerSellerInfoDetailsService implements UserDetailsService {
	@Autowired
	CustomerRepository customerRepo;
	@Autowired
	AdminRepository adminRepo;
	@Autowired
	SellerRepository sellerRepo;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// Check if the username exists in the customer table
		Optional<Customer> customer=customerRepo.findByUsername(username);
		if(customer.isPresent()) {
			return new CustomerInfoDetails(customer.get());
		}
		
// Check if the username exists in the admin table
		Optional<Admin> admin = adminRepo.findByUsername(username);
        if (admin.isPresent()) {
            return new AdminInfoDetails(admin.get());
        }
      
//        Check if the username exists in the seller table
        Optional<Seller> seller = sellerRepo.findByUsername(username);
        if (seller.isPresent()) {
            return new SellerInfoDetails(seller.get());
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
	}

}
