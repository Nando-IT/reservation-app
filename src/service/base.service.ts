import { BaseCreateDto } from "../dto/baseCreate.dto";
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
    CreateDto extends BaseCreateDto,
    CreateInput,
    UpdateInput,
    WhereUniqueInput
>(repository: BaseRepository<Entity,
    CreateInput,
    UpdateInput,
    WhereUniqueInput
>,mapper:) : BaseService<Entity,
    CreateDto,
    UpdateInput,
    WhereUniqueInput> => ({
    findMany: () => repository.findMany(),
    findByUnique: (where: WhereUniqueInput) => repository.findByUnique(where),
    create: (data: CreateDto) => repository.create(data),
    update: (where: WhereUniqueInput, data: UpdateInput) => repository.update(where, data),
    delete: (where: WhereUniqueInput) => repository.delete(where),
})