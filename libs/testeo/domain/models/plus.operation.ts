import { OperationImplement, OperationInterface} from '../../../share/interfaces/domain/models/operation.interface';

export class PlusOperation implements OperationImplement {
    operation(operation: OperationInterface): number
    {
        return operation.num1 + operation.num2;
    }
}
