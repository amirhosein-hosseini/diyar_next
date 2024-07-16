import React from "react";
import axios from "axios";
import { domain, prefix } from "./domain";

export const getAllCategories = async () => {
    try {
        const response = await axios.get(domain + prefix + "website/" + 'categories?per_page=all');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getCategoryById = async (slug) => {
    try {
        const response = await axios.get(domain + prefix + "website/" + 'categories/' + slug);
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

