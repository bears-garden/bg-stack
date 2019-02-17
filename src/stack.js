/**
 * Created by arthuranderson on 3/13/17.
 */

const Node = require("@bears-garden/single-node");

class Stack{
    constructor(){
        this.head = null;
    }

    /**
     * push
     * @param obj - data
     * @returns {void}
     */
    push( obj ){
        this.head = Node.insert( this.head, obj );
    }

    /**
     * pop
     * @returns {object} the data
     */
    pop(){
        let retval = this.head;
        this.head = Node.remove( this.head, this.head.data );
        return retval.data;
    }

    /**
     * empty
     * @returns {boolean} true if empty
     */
    empty(){
        return this.head === null;
    }
}
module.exports = Stack;
