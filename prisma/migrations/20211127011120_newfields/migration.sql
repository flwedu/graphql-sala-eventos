-- CreateEnum
CREATE TYPE "Acess" AS ENUM ('PUBLIC', 'ONLYINVITED', 'ONLYACCEPTED');

-- AlterTable
ALTER TABLE "RoomEvent" ADD COLUMN     "acess" "Acess" NOT NULL DEFAULT E'PUBLIC';