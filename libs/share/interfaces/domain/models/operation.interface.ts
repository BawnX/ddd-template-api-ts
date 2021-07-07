export interface OperationInterface
{
    num1: number;
    num2: number;
    operation?: string;
}

export interface OperationImplement {
    operation(operation: OperationInterface) :number
}

export interface OperationCommand {
    operationCommand(operation: OperationInterface): Promise<number>
}
