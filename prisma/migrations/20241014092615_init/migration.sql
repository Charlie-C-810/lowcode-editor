-- CreateTable
CREATE TABLE `Component` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `parentId` INTEGER NULL,

    UNIQUE INDEX `Component_parentId_key`(`parentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Component` ADD CONSTRAINT `Component_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Component`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
