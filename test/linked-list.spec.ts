import { LinkedList, Node } from '../src/linked-list';
import { expect } from 'chai';

describe(LinkedList.name, () => {

    describe("Basic Functionality", () => {
        it('should contain one item, after construction', () => {
            let myList = new LinkedList(new Node(3));
            expect(myList.arrayify()).to.deep.equal([3]);
        });

        it('should correctly build the head and tail pointer after construction', () => {
            let myNode = new Node(3);
            let myList = new LinkedList(myNode);
            expect(myList.head).to.equal(myNode);
            expect(myList.tail).to.equal(myNode);
        });
    
        it('should contain one item, after pushing front', () => {
            let myNode = new Node(3);
            let myList = new LinkedList();
            myList.pushFront(myNode);
            expect(myList.head).to.equal(myNode);
            expect(myList.tail).to.equal(myNode);
            expect(myList.arrayify()).to.deep.equal([3]);
        });
    
        it('should contain one item, after pushing back', () => {
            let myNode = new Node(3);
            let myList = new LinkedList();
            myList.pushBack(myNode);
            expect(myList.head).to.equal(myNode);
            expect(myList.tail).to.equal(myNode);
            expect(myList.arrayify()).to.deep.equal([3]);
        });

        it('should contain three items, after pushing front', () => {
            let myList = new LinkedList();
            myList.pushFront(new Node(3));
            myList.pushFront(new Node(2));
            myList.pushFront(new Node(1));
            expect(myList.head && myList.head.data).to.equal(1);
            expect(myList.tail && myList.tail.data).to.equal(3);
            expect(myList.arrayify()).to.deep.equal([1, 2, 3]);
        });

        it('should contain three items, after pushing back', () => {
            let myList = new LinkedList();
            myList.pushBack(new Node(3));
            myList.pushBack(new Node(2));
            myList.pushBack(new Node(1));
            expect(myList.head && myList.head.data).to.equal(3);
            expect(myList.tail && myList.tail.data).to.equal(1);
            expect(myList.arrayify()).to.deep.equal([3, 2, 1]);
        });
    });

    describe("Interaction between push and delete", () => {
        it('should contain no items, after construction and remove back', () => {
            let myList = new LinkedList(new Node(3));
            myList.removeBack();
            expect(myList.head).to.equal(null);
            expect(myList.tail).to.equal(null);
            expect(myList.arrayify()).to.deep.equal([]);
        });

        it('should contain no items, after construction and remove front', () => {
            let myList = new LinkedList(new Node(3));
            myList.removeFront();
            expect(myList.head).to.equal(null);
            expect(myList.tail).to.equal(null);
            expect(myList.arrayify()).to.deep.equal([]);
        });

        it('should contain one item, after construction, push and remove back', () => {
            let myNode = new Node(5);
            let myList = new LinkedList(new Node(3));
            myList.pushFront(myNode);
            expect(myList.arrayify()).to.deep.equal([5, 3]);
            myList.removeBack();
            expect(myList.head).to.equal(myNode);
            expect(myList.tail).to.equal(myNode);
            expect(myList.arrayify()).to.deep.equal([5]);
        }); 

        it('should properly add three items and remove each from the front', () => {
            let one = new Node(1);
            let two = new Node(2);
            let three = new Node(3);
            let myList = new LinkedList();
            myList.pushFront(three);
            myList.pushFront(two);
            myList.pushFront(one);

            expect(myList.arrayify()).to.deep.equal([1, 2, 3]);
            expect(myList.head).to.equal(one);
            expect(myList.tail).to.equal(three);
            
            myList.removeFront();
            expect(myList.arrayify()).to.deep.equal([2, 3]);
            expect(myList.head).to.equal(two);
            expect(myList.tail).to.equal(three);

            myList.removeFront();
            expect(myList.arrayify()).to.deep.equal([3]);
            expect(myList.head).to.equal(three);
            expect(myList.tail).to.equal(three);
            
            myList.removeFront();
            expect(myList.arrayify()).to.deep.equal([]);
            expect(myList.head).to.equal(null);
            expect(myList.tail).to.equal(null);
        }); 
    });

    describe("List Contains", () => {
        let one: Node;
        let two: Node;
        let three: Node;
        let myList: LinkedList;
        
        beforeEach(() => {
            one = new Node(1);
            two = new Node(2);
            three = new Node(3);
            myList = new LinkedList();
            myList.pushBack(one);
            myList.pushBack(two);
            myList.pushBack(three);
            expect(myList.arrayify()).to.deep.equal([1, 2, 3]);
        });

        it('should show it contains an item it contains', () => {
            expect(myList.contains(one)).to.equal(true);
            expect(myList.contains(two)).to.equal(true);
            expect(myList.contains(three)).to.equal(true);
        });

        it('should not show it contains an item it does not contain', () => {
            let four = new Node(4);
            expect(myList.contains(four)).to.equal(false);
        });

    });

    describe("Node Removal", () => {
        let one: Node;
        let two: Node;
        let three: Node;
        let myList: LinkedList;
        
        beforeEach(() => {
            one = new Node(1);
            two = new Node(2);
            three = new Node(3);
            myList = new LinkedList();
            myList.pushBack(one);
            myList.pushBack(two);
            myList.pushBack(three);
            expect(myList.arrayify()).to.deep.equal([1, 2, 3]);
        })

        it('should properly remove the middle item', () => {
            myList.remove(two);
            expect(myList.arrayify()).to.deep.equal([1, 3]);
            expect(myList.head).to.equal(one);
            expect(myList.tail).to.equal(three);
        });

        it('should properly remove the first item', () => {
            myList.remove(one);
            expect(myList.arrayify()).to.deep.equal([2, 3]);
            expect(myList.head).to.equal(two);
            expect(myList.tail).to.equal(three);
        });

        it('should properly remove the last item', () => {
            myList.remove(three);
            expect(myList.arrayify()).to.deep.equal([1, 2]);
            expect(myList.head).to.equal(one);
            expect(myList.tail).to.equal(two);
        });

        it('should properly remove all items in sequence', () => {
            myList.remove(one);
            expect(myList.arrayify()).to.deep.equal([2, 3]);
            expect(myList.head).to.equal(two);
            expect(myList.tail).to.equal(three);

            myList.remove(two);
            expect(myList.arrayify()).to.deep.equal([3]);
            expect(myList.head).to.equal(three);
            expect(myList.tail).to.equal(three);

            myList.remove(three);
            expect(myList.arrayify()).to.deep.equal([]);
            expect(myList.head).to.equal(null);
            expect(myList.tail).to.equal(null);
        });

        it('should not remove a node that does not exist in the list', () => {
            myList.remove(one);
            expect(myList.arrayify()).to.deep.equal([2, 3]);

            myList.remove(one)
            expect(myList.arrayify()).to.deep.equal([2, 3]);;
        })

        it('should not do anything in an empty list', () => {
            myList.remove(one);
            myList.remove(two);
            myList.remove(three);
            expect(myList.arrayify()).to.deep.equal([]);

            myList.remove(one)
            expect(myList.arrayify()).to.deep.equal([]);;
        })

        it('should not remove a node that does not belong to the list', () => {
            
            let newOne = new Node(1);
            let newTwo = new Node(2);
            let newThree = new Node(3);
            let newList = new LinkedList();
            newList.pushBack(newOne);
            newList.pushBack(newTwo);
            newList.pushBack(newThree);
            
            expect(newList.arrayify()).to.deep.equal([1, 2, 3]);

            myList.remove(newTwo);
            expect(myList.arrayify()).to.deep.equal([1, 2, 3]);
        });
    });

});

