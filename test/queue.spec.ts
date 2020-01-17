import { Queue } from '../src/queue';
import { expect } from 'chai';

describe(Queue.name, () => {

    describe("Basic Functionality", () => {
        it('should have unit tests', () => {
            let myList = new Queue();
            expect(myList.arrayify()).to.deep.equal([]);
        });
    });

});

