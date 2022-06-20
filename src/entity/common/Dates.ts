import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Dates extends BaseEntity {
  @CreateDateColumn({ select: false })
  createAt: Date;

  @UpdateDateColumn({ select: false })
  updateAd: Date;
}
