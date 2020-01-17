// linked list node
export class Node {
    data: any | null;
    prev: Node | null;
    next: Node | null;

    constructor(data: any = null) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// double linked list
export class LinkedList {
    head: Node | null;
    tail: Node | null;
    contents = new Set<Node>();

    constructor(start: Node | null = null) {
        this.head = start;
        this.tail = start;
        if(start){
            this.contents.add(start);
        }
    }

    contains(node: Node){
        return this.contents.has(node);
    }

    remove(node: Node): void {
        if(!this.contains(node)){
            return;
        }

        if(node === this.head){
            return this.removeFront();
        }

        if(node === this.tail){
            return this.removeBack();
        }
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
        this.contents.delete(node);
    }

    removeFront(): void {
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        if(this.head){
            const nextElement = this.head.next;
            this.contents.delete(this.head);
            this.head = nextElement;
            if(this.head){
                this.head.prev = null;
            }
        }
    }

    removeBack(): void {
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        if(this.tail){
            const prevElement = this.tail.prev;
            this.contents.delete(this.tail);
            this.tail = prevElement;
            if(this.tail){
                this.tail.next = null;
            }
        }
    }

    pushFront(node: Node): void {
        this.contents.add(node);
        if(this.head){
            this.head.prev = node;
            node.next = this.head;
        }
        if(!this.tail){
            this.tail = node;
        }
        this.head = node;
    }

    pushBack(node: Node): void {
        this.contents.add(node);
        if(this.tail){
            this.tail.next = node;
            node.prev = this.tail;
        }
        if(!this.head){
            this.head = node;
        }
        this.tail = node;
    }

    arrayify(): any [] {
        let output: any[] = [];
        let currentHead = this.head;
        while (currentHead){
            output.push(currentHead.data);
            currentHead = currentHead.next;
        }
        return output;
    }
}
