package com.hexaware.ecommerce.service;

import java.util.List;

import com.hexaware.ecommerce.dto.SubCategoryDTO;
import com.hexaware.ecommerce.entity.SubCategory;
import com.hexaware.ecommerce.exception.SubCategoryNotFoundException;

public interface ISubCategoryService {
	public SubCategory addSubCategory(SubCategoryDTO subCategoryDTO);
    public SubCategory updateSubCategory(SubCategoryDTO subCategoryDTO) throws SubCategoryNotFoundException ;
    public String deleteSubCategoryById(int subCategoryId) throws SubCategoryNotFoundException ;
    public SubCategoryDTO getSubCategoryById(int subCategoryId) throws SubCategoryNotFoundException ;
    public List<SubCategory> getAllSubCategory();
    public SubCategory getSubCategoryByName(String name);
}
