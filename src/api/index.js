import React from "react";
import axios from "axios";
import { domain, prefix } from "./domain";

export const getAllHomeContents = async () => {
    try {
        const response = await axios.get(domain + "api/" + 'home/');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};



export const getAllHomeBenefit = async () => {
    try {
        const response = await axios.get(domain + "api/" + 'home/benefit/');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};



export const getAllHomePartners = async () => {
    try {
        const response = await axios.get(domain + "api/" + 'home/partner/');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};



export const getAllFeedBacks = async () => {
    try {
        const response = await axios.get(domain + prefix + "website/" + 'testimonials');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};