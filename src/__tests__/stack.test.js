/**
 * Created by arthuranderson on 3/13/17.
 */
import Stack from '../stack';

describe("stack", function(){
    "use strict";

    test("ctor", function() {
        let stack = new Stack();
        expect( stack.empty() ).toEqual(true);
    });

    test( 'push', function() {
        let stack = new Stack();
        stack.push(1);
        expect( stack.empty() ).toEqual( false );
    });

    test( "pop", function() {
        let stack = new Stack();
        stack.push(1);
        expect( stack.pop() ).toEqual(1);
    });

    test( "stack it up", function() {
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
