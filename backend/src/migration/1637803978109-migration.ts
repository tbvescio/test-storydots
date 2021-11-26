import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1637803978109 implements MigrationInterface {
    name = 'migration1637803978109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "image_url" varchar NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "name", "description", "image_url", "price") SELECT "id", "name", "description", "image_url", "price" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "image_url" varchar NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "name", "description", "image_url", "price") SELECT "id", "name", "description", "image_url", "price" FROM "product"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "image_url" varchar NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "product"("id", "name", "description", "image_url", "price") SELECT "id", "name", "description", "image_url", "price" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`);
        await queryRunner.query(`CREATE TABLE "product" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "image_url" varchar NOT NULL, "price" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "product"("id", "name", "description", "image_url", "price") SELECT "id", "name", "description", "image_url", "price" FROM "temporary_product"`);
        await queryRunner.query(`DROP TABLE "temporary_product"`);
    }

}
