
import {handleSubmit} from "../src/client/js/formHandler"
import { postData } from "../src/client/js/formHandler";

describe('Test, the function "handleSubmit()" should exist',()=>{
    test('It should return true',()=>{
        expect(handleSubmit).toBeDefined();
    })
});

describe('Test, the function "postData()" should exist',()=>{
    test('It should return true',()=>{
        expect(postData).toBeDefined;
    })
})