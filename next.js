class LinkedList{
    constructor(){
        this.head = null;
        this .tail = null;
    }
    // this adds a new node after the last one
    append(value) {
        let Node = {
            value: value,
            next: null 
        };

        if(this.tail) {
            this.tail.next = Node;
        }

        this.tail = Node; 

        if(!this.head) {
                this.head = Node;
        }
    }

    // To add/ push a node to first position

    prepend(value) {
        let Node = {value:value, 
            next:this.head
        }
    
    if (this.head) {
        this.head = Node;
        } 
    }

    // removes or deletes a node
    remove (value) {
        if(!this.head) {
            return;
        }
        while(this.head && this.head.value === value) {
            this.head.next = this.head;
        }

        let Node = this.head;
        while(Node.next) {
            if (Node.next.value === value) {
                Node.next = Node.next.next;
            }else {
                    Node = Node.next;
            }
        }

        if (this.tail.value === value) {
                this.tail = Node;
            }
    }

    print() {
        let element = [];
        let Node = this.head;

        while(Node) {
        element.push(Node);
        Node = Node.next;
            }
   
            return element;
        }

}  


  
const build = new LinkedList();

build.append("Hello");
build.append("From")
build.append("CodeLab")

console.log(build.print());