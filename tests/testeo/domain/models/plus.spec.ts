import { PlusOperation } from '../../../../libs/testeo/domain/models/plus.operation';

describe('test', () => {
    it('should sum', () => {
        const num1: number = 1
        const num2: number = 1
        const plus: PlusOperation = new PlusOperation()

        expect(2).toEqual(plus.operation({num1, num2}))
    })
})
