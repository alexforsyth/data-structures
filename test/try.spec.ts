import { HelloWorld } from '../src/try';
import { expect } from 'chai';

describe(HelloWorld.name, () => {
    it('should be called', () => {
        console.log("function is called");
        expect(1).to.equal(1);
    });
});

