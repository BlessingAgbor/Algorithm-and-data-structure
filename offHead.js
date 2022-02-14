class LinkList{
    constructor(){
        this.head= null
        this.tail = null
    }

    // This will create a node upon entry
    throwIn (entry){
        let Node = {entry:entry, next: null}
        if(this.tail){
            this.tail.next=Node
        }
        this.tail=Node
        if(!this.head){
            this.head=Node
        }
    }

    // Now lets create a bucket that will hold the entries
    bucket (){
        // create an empty var that would hold the entries
        const buc = []
        let Node = this.head
        // Now lets create a while loop that would be iterating as we don't know the end of our entries
        while(Node){
            buc.push(Node)
            Node= Node.next
        }
        return buc
    }

    // NOW LETS CREATE A FUCTION THAT WILL GO AND CHANCE THE FIRST NODE AND THEN TAKE IT'S PLACE
    chancer (entry){
        let Node ={entry:entry, next: this.head}

        if(this.head){
            this.head = Node
        }
    }


}
const list= new LinkList()
list.throwIn("Ade")
list.throwIn("Thomas")
list.throwIn("Joel")
list.throwIn("Cassie")
list.chancer("Ifeoluwa")
console.log(list.bucket());