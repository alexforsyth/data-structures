import { Node, LinkedList } from "./linked-list";

// double linked list
export class Deque {
    list: LinkedList;
    length: number;

    constructor() {
        this.list = new LinkedList();
        this.length = 0;
    }

    peekFront(): Node | null {
        return this.list.head;
    }

    peekBack(): Node | null {
        return this.list.tail;
    }
    
    popFront(): void {
        this.list.removeFront();
        this.length = Math.max(0, this.length - 1);
    }
    
    popBack(): void {
        this.list.removeBack();
        this.length = Math.max(0, this.length - 1);
    }

    pushFront(node: Node): void {
        this.list.pushFront(node);
        this.length += 1;
    }

    pushBack(node: Node): void {
        this.list.pushBack(node);
        this.length += 1;
    }

    getLength(): number {
        return this.length;
    }

    arrayify(): any [] {
       return this.list.arrayify();
    }
}
