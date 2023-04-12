-- AlterTable
ALTER TABLE `Users` ADD COLUMN `bio` VARCHAR(191) NULL,
    ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `LikedScreenplays` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `screenplayId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LikedScreenplays` ADD CONSTRAINT `LikedScreenplays_screenplayId_fkey` FOREIGN KEY (`screenplayId`) REFERENCES `Screenplays`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LikedScreenplays` ADD CONSTRAINT `LikedScreenplays_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
