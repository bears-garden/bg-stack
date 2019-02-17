# @bears-garden/stack
classic stack implementation

## Usage
`var Stack = require("@bears-garden/stack");`
`var stack = new Stack();`

### push
runtime O(1)

`stack.push(1);`  

### pop
runtime O(1)
@returns the last item pushed onto the stack

'let item = stack.pop()'

### empty
runtime O(1)
@returns true when the stack is empty
