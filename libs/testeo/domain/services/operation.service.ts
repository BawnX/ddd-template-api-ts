import { OperationCommand, OperationInterface } from '../../../share/interfaces/domain/models/operation.interface';
import { MiniumOperation } from '../models/minium.operation';
import { PlusOperation } from '../models/plus.operation';

export default class OperationService implements OperationCommand{
    operationCommand(operation: OperationInterface): Promise<number>
    {
        switch (operation.operation){
            case 'minium':
                return Promise.resolve(new MiniumOperation().operation({num1: operation.num1, num2: operation.num2}))
            case 'plus':
                return Promise.resolve(new PlusOperation().operation({num1: operation.num1, num2: operation.num2}))
            default:
                return Promise.reject('undefinded')
        }
    }
}
