import { Deque } from '../src/deque';
import { expect } from 'chai';

describe(Deque.name, () => {

    describe("Basic Functionality", () => {
        it('should have unit tests', () => {
            let myList = new Deque();
            expect(myList.arrayify()).to.deep.equal([]);
        });
    });

});

