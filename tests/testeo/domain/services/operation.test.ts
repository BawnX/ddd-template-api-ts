import OperationService from '../../../../libs/testeo/domain/services/operation.service';


describe('test', () => {
    it('should rest', async () =>
    {
        const minium: OperationService = new OperationService()

        expect(-1).toEqual(await minium.operationCommand({num1: 1, num2: 2, operation: 'minium'}))
    })
})
