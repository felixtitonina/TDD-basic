import getFactorial from './factorial'
import { typeErrorMessage, rangeErrorMessage } from './util'


describe('happy path', () => {

    test('getFactorial should be a function ', () => {
        expect(getFactorial).toBeInstanceOf(Function)
    })

    test('getFactorial(3) should return 6', () => {
        const actual = getFactorial(3)
        const expected = 6

        expect(actual).toBe(expected)
    })

    test('getFactorial(3) should return 6', () => {
        const actual = getFactorial(4)
        const expected = 24

        expect(actual).toBe(expected)
    })

})

describe('Unhappy path', () => {
    test('getFactorial() should throw a typeError', () => {
        try {
            getFactorial()
        } catch ({ name }) {
            expect(name).toBe('TypeError')
        }
    })

    test(`getFactorial() should throw a typeError with message ${typeErrorMessage}`, () => {
        try {
            getFactorial()
        } catch ({ message }) {
            expect(message).toBe(typeErrorMessage)
        }
    })

    test(`getFactorial(0) should return 1 `, () => {
        const actual = getFactorial(0)
        const expected = 1

        expect(actual).toBe(expected)
    })
    test('getFactorial(-1) should throw a RangeError', () => {
        try {
            getFactorial(-1)
        } catch ({ name }) {
            expect(name).toBe('RangeError')
        }
    })

    test(`getFactorial(-1) should throw a RangeErrors with message ${rangeErrorMessage}`, () => {
        try {
            getFactorial(-1)
        } catch ({ message }) {
            expect(message).toBe(rangeErrorMessage)
        }
    })

})