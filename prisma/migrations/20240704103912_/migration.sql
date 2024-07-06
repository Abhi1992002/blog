/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `SubscriptionToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SubscriptionToken_email_key" ON "SubscriptionToken"("email");
