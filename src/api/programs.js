import React from "react";
import axios from "axios";
import { domain } from "./domain";

export const getAllProgramItemsCategory = async () => {
    try {
        const response = await axios.get(domain + "api/" + 'programs/category');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const showProgramCategory = async (slug) => {
    try {
        const response = await axios.get(domain + "api/" + 'programs/category_program?category_slug=' + slug );
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getAllProgramSubCategories = async (slug) => {
    try {
        const response = await axios.get(domain + "api/" + 'programs/subcategory?category_slug=' + slug );
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};



export const showProgram = async (slug) => {
    try {
        const response = await axios.get(domain + "api/" + 'programs/subcategory_program?subcategory_slug=' + slug );
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
