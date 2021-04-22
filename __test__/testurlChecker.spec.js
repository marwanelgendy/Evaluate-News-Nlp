import {checkForURL} from "../src/client/js/urlChecker"

describe('Test, the function "checkForURL()"',()=>{

    let trueURL = "https://www.valentinog.com/blog/jest/"
    let flaseURL = "ffff"

    test('Return true URL', async ()=>{
        const res1 = checkForURL(trueURL)
        expect(res1).toBe(true);
        expect(res1).toBeDefined();
    });

    test('Return true URL', async ()=>{
        const res2 = checkForURL(flaseURL)
        expect(res2).toBe(false);
    });
});