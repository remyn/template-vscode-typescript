import { Welcome } from "../app/hello";
import 'mocha';
import { assert } from 'chai';


describe('Module Hello', () => {
    describe('Greetings', () => {
        it('Should return Hello World', () => {
            assert.match(Welcome(), /^Hello World/, "The greeting doesn't start with: 'Hello World'.")
        })
    })
})