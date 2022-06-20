import { EntityTarget } from "typeorm";
import { AppDataSource } from "../data-source";

export function datasource<T>(entity: EntityTarget<T>, alias: string = "") {
  return AppDataSource.createQueryBuilder()
    .createQueryBuilder()
    .select(alias)
    .from(entity, alias);
}
export function repository<T>(entity: EntityTarget<T>, alias: string = "") {
  return AppDataSource.getRepository(entity).createQueryBuilder(alias);
}
export function entityManager<T>(entity: EntityTarget<T>, alias: string = "") {
  return AppDataSource.manager.createQueryBuilder(entity, alias);
}
