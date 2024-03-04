package com.hexaware.ecommerce.service;

import java.util.List;


import com.hexaware.ecommerce.dto.CategoryDTO;
import com.hexaware.ecommerce.entity.Category;
import com.hexaware.ecommerce.entity.SubCategory;
import com.hexaware.ecommerce.exception.CategoryNotFoundException;

public interface ICategoryService {
	 public Category addCategory(CategoryDTO categoryDTO);
     public Category updateCategory(CategoryDTO categoryDTO) throws CategoryNotFoundException;
     public String deleteCategoryById(int categoryId) throws CategoryNotFoundException;
     public CategoryDTO getCategoryById(int categoryId) throws CategoryNotFoundException;
     public List<Category> getAllCategory();
    public List<SubCategory> getSubCategoryIdByCategoryId(int categoryId) throws CategoryNotFoundException;

    
    public Category getCategorybyName(String name);
}
