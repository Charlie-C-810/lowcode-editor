-- CreateTable
CREATE TABLE `Component` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `props` JSON NOT NULL,
    `parentId` INTEGER NULL,

    UNIQUE INDEX `Component_parentId_key`(`parentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
