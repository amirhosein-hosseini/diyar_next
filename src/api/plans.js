import React from "react";
import axios from "axios";
import { domain, prefix } from "./domain";

export const getAllPlans = async () => {
    try {
        const response = await axios.get(domain + prefix + "website/" + 'plans');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};



export const getPlanById = async (slug) => {
    try {
        const response = await axios.get(domain + prefix + "website/" + 'plans/' + slug);
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


