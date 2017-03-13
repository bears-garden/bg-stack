/**
 * Created by arthuranderson on 3/13/17.
 */

describe("stack", function(){
    "use strict";
    let Stack = require("../lib/index");

    it("ctor", function() {
        let stack = new Stack();
        expect( stack.empty() ).toEqual(true);
    });

    it( 'push', function() {
        let stack = new Stack();
        stack.push(1);
        expect( stack.empty() ).toEqual( false );
    });

    it( "pop", function() {
        let stack = new Stack();
        stack.push(1);
        expect( stack.pop() ).toEqual(1);
    });

    it( "stack it up", function() {
        let stack = new Stack();
        for( let idx = 0; idx < 100; idx++ ){
            stack.push(idx);
        }
        let i = 99;
        while( !stack.empty() ){
            expect( stack.pop() ).toEqual( i-- );
        }
    })

})
