-- CreateTable
CREATE TABLE "ZapRunOutBox" (
    "id" TEXT NOT NULL,
    "zapId" TEXT NOT NULL,

    CONSTRAINT "ZapRunOutBox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZapRunOutBox_zapId_key" ON "ZapRunOutBox"("zapId");

-- AddForeignKey
ALTER TABLE "ZapRunOutBox" ADD CONSTRAINT "ZapRunOutBox_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zaprun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
