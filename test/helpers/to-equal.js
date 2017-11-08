import {
    isEqual
} from 'lodash';

beforeEach(() => {
    jasmine.addMatchers({
        toEqual: () => {
            return {
                compare: (a, b) => {
                    const pass = isEqual(a, b);
                    return {
                        pass,
                        message: `Expected ${a} to equal ${b}`
                    }
                }
            }
        }
    })
});