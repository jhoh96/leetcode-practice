class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data)
        let current;
        // If empty, make head
        if(this.head == null) {
            this.head = node
        } else {
            current = this.head
            while(current.next !== null) {
                current = current.next
            }

            current.next = node;
        }

        this.size++
    }

    // Insert at index
    insertAt(data, index) {
        // If index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // if index is 0 (just set it to head)
        if(index === 0) {
            // this.insertFirst(data)
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; // Node before index
            count++
            current = current.next; // Node after index
        }

        node.next = current
        previous.next = node;

        this.size++
    }

    // Get at index

    // Remove at index

    // Clear list

    // Print list data
    printListData() {
        let current = this.head;
        while(current != null) {
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400)
ll.insertAt(500, 10)

ll.printListData()