import { OperationInterface, OperationImplement } from '../../../share/interfaces/domain/models/operation.interface';

export class MiniumOperation implements OperationImplement {
    operation(operation:OperationInterface): number
    {
        return operation.num1 - operation.num2;
    }
}
