import 'mocha';
import { assert } from 'chai';


describe('app', () => {
    describe('Generic functionality', () => {
        it('should really pass', () => {   
            assert.isTrue(true)
        })
        it('should just fail', () => {
            assert.isTrue(false, 'Check the trace !')
        })
    })
})