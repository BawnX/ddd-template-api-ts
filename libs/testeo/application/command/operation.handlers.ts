import { Inject, Singleton } from 'typescript-ioc';
import { OperationImplement } from '../../domain/models/operation.implement';
import OperationService from '../../domain/services/operation.service';

@Singleton
export class OperationCommandHandlers extends OperationImplement{
    @Inject
    private readonly operationInjected: OperationService

    execute(op: {num1: number, num2: number, operation: string}): Promise<number>
    {
        return  this.operationInjected.operationCommand(op)
    }
}
