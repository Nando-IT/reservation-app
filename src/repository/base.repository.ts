import { BaseEntity } from "../types/baseEntity.type";

export type EntityDelegate<Entity, CreateInput, UpdateInput, WhereUniqueInput> = {
    findMany: (args?: any) => Promise<Entity[]>;
    findUnique: (args: { where: WhereUniqueInput }) => Promise<Entity | null>;
    create: (args: { data: CreateInput }) => Promise<Entity>;
    update: (args: { where: WhereUniqueInput; data: UpdateInput }) => Promise<Entity>;
    delete: (args: { where: WhereUniqueInput }) => Promise<Entity>;
}
type WhereIdInput = {
    id: number
}
export type BaseRepository<Entity,
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

export const createBaseRepository =
    <Entity extends BaseEntity,
        CreateInput,
        UpdateInput,
        WhereUniqueInput
    >(model: EntityDelegate<Entity,
        CreateInput,
        UpdateInput,
        WhereUniqueInput>): BaseRepository<Entity,
            CreateInput,
            UpdateInput,
            WhereUniqueInput
        > => ({
            findMany: () => model.findMany(),
            findByUnique: (where: WhereUniqueInput) => model.findUnique({ where }),
            create: (data: CreateInput) => model.create({ data }),
            update: (where: WhereUniqueInput, data: UpdateInput) => model.update({ where, data }),
            delete: (where: WhereUniqueInput) => model.delete({ where }),
        }) 