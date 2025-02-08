import { APIRequestContext, expect } from '@playwright/test';

export class ApiUtils {
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    // Reusable method to make a GET request
    async get(endpoint: string) {
        const response = await this.request.get(endpoint);
        expect.soft(response.status()).toBe(200); // Ensure the request was successful
        return await response.json(); // Return the JSON response
    }

    // Reusable method to compare JSON responses
    async compareResponses(actualResponse: any, expectedResponse: any) {
        expect(actualResponse).toEqual(expectedResponse); 
    }
}