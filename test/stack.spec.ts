import { Stack } from '../src/stack';
import { expect } from 'chai';

describe(Stack.name, () => {

    describe("Basic Functionality", () => {
        it('should have unit tests', () => {
            let myList = new Stack();
            expect(myList.arrayify()).to.deep.equal([]);
        });
    });

});

