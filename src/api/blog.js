import React from "react";
import axios from "axios";
import { domain } from "./domain";

export const getAllBlogs = async () => {
    try {
        const response = await axios.get(domain + "api/" + 'journal/list');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getFavoriteBlogs = async (limit) => {
    try {
        const response = await axios.get(domain + "api/" + 'journal/list?limit=' + limit);
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const showBlog = async (slug) => {
    try {
        const response = await axios.get(domain + "api/" + 'journal?journal_slug=' + slug);
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};