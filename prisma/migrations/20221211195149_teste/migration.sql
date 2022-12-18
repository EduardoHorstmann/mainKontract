-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "data" circle NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);
