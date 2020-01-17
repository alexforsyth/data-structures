import { Node } from "./linked-list";
import { Deque } from "./deque";

// FIFO queue with a deque, first in, first out
export class Queue {
    deque: Deque;

    constructor() {
        this.deque = new Deque();
    }

    peek(): Node | null {
        return this.deque.peekBack();
    }
    
    pop(): void {
        this.deque.popBack();
    }

    push(node: Node): void {
        this.deque.pushFront(node);
    }

    getLength(): number {
        return this.deque.getLength();
    }

    arrayify(): any [] {
       return this.deque.arrayify();
    }
}
