import { BaseRepository } from "../repository/base.repository";
import { BaseEntity } from "../types/baseEntity.type";

export type BaseService<Entity,
    CreateInput,
    UpdateInput,
    WhereUniqueInput
> = {
    findMany: () => Promise<Entity[]>
    findByUnique: (where: WhereUniqueInput) => Promise<Entity | null>,
    create: (data: CreateInput) => Promise<Entity>,
    update: (where: WhereUniqueInput, data: UpdateInput) => Promise<Entity>,
    delete: (where: WhereUniqueInput) => Promise<Entity>,
}

export const createBaseService = <Entity extends BaseEntity,
    CreateInput,
    UpdateInput,
    WhereUniqueInput
>(repository: BaseRepository<Entity,
    CreateInput,
    UpdateInput,
    WhereUniqueInput
>) : BaseService<Entity,
    CreateInput,
    UpdateInput,
    WhereUniqueInput> => ({
    findMany: () => repository.findMany(),
    findByUnique: (where: WhereUniqueInput) => repository.findByUnique(where),
    create: (data: CreateInput) => repository.create(data),
    update: (where: WhereUniqueInput, data: UpdateInput) => repository.update(where, data),
    delete: (where: WhereUniqueInput) => repository.delete(where),
})