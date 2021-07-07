import { MiniumOperation } from '../../../../libs/testeo/domain/models/minium.operation';

describe('test', () => {
    it('should rest', () => {
        const num1: number = 1
        const num2: number = 1
        const minium: MiniumOperation = new MiniumOperation()

        expect(0).toEqual(minium.operation({num1, num2}))
    })
})
