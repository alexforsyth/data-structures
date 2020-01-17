// FILO stack with an array, first in, last out.
// TODO: convert to using generics
export class Stack {
    stack: any[];

    constructor() {
        this.stack = [];
    }

    peek(): any | null {
        if( this.stack.length){
            return this.stack[this.stack.length - 1];
        }
        return null;
    }
    
    pop(): void {
        this.stack.pop();
    }

    push(node: any): void {
        this.stack.push(node);
    }

    getLength(): number {
        return this.stack.length;
    }

    arrayify(): any [] {
       return this.stack;
    }
}
