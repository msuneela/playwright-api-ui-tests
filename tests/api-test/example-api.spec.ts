import {expect, test} from '@playwright/test';
import { ApiUtils } from '../../utils/api-utils';
import { URLs } from '../../configs/config';
import expectedResponse from '../../test-data/expected-api-response.json'
test('verify Get Request method matches given expected response',async({request}) => {
   const apiUtils = new ApiUtils(request);
   const url = URLs.apiurl;

    // Await the get method to get the actual JSON response
    const actualResponse = await apiUtils.get(url);
    await expect(actualResponse).toBeOK();

    await apiUtils.compareResponses(actualResponse, expectedResponse);
});