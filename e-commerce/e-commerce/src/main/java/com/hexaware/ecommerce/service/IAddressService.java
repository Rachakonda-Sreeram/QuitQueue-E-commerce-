package com.hexaware.ecommerce.service;

import java.util.List;

import com.hexaware.ecommerce.dto.AddressDTO;
import com.hexaware.ecommerce.entity.Address;

public interface IAddressService {
    public Address addAddress(AddressDTO addressDTO);
    public Address updateAddress(AddressDTO addressDTO);
    public String deleteAddressById(int addressId);
    public AddressDTO getAddressById(int addressId);
    public List<Address> getAllAddress();
}
