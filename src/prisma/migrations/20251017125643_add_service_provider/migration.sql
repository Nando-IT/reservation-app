-- CreateTable
CREATE TABLE "userServiceProvider" (
    "userId" INTEGER NOT NULL,
    "serviceProviderId" INTEGER NOT NULL,

    CONSTRAINT "userServiceProvider_pkey" PRIMARY KEY ("userId","serviceProviderId")
);

-- AddForeignKey
ALTER TABLE "userServiceProvider" ADD CONSTRAINT "userServiceProvider_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userServiceProvider" ADD CONSTRAINT "userServiceProvider_serviceProviderId_fkey" FOREIGN KEY ("serviceProviderId") REFERENCES "serviceProvider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
