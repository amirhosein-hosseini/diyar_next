import React from "react";
import axios from "axios";
import { domain } from "./domain";

export const getAllPodcasts = async () => {
    try {
        const response = await axios.get(domain + "api/" + 'podcast/list/');
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};