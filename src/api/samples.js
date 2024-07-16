import React from "react";
import axios from "axios";
import { domain, prefix } from "./domain";

export const getAllSamples = async () => {
    try {
        const response = await axios.get(domain + prefix + "website/" + 'successful-examples/');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getSampleById = async (id) => {
    try {
        const response = await axios.get(domain + prefix + "website/" + 'successful-examples/' + id);
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};