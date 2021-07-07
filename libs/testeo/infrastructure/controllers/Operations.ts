import { GET, Path, PathParam, ContextRequest } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import { OperationCommandHandlers } from '../../application/command/operation.handlers';

@Path('/operation')
class Operations
{
    @Inject
    private operationCommandHandlers: OperationCommandHandlers

    @Path(':operation')
    @GET
    sayHello(@PathParam('operation') operation: string, @ContextRequest context): Promise<number>
    {
        const {num1, num2} = context.body
        return this.operationCommandHandlers.execute({num1, num2, operation})
    }
}
