"use server";
import { v4 as uuid } from "uuid";
import { db } from "@/lib/db";
import { Resend } from "resend";
import { VerifyEmail } from "@/react-email-starter/emails/verify";

const resend = new Resend(process.env.RESEND_API_KEY);

export const subscription = async (email: string) => {
  try {
    // check if the email is already subscribed
    const emails = await db.subscription.findUnique({
      where: {
        email: email,
      },
    });

    if (emails && emails.email === email) {
      return { message: "Email already subscribed" };
    }

    // create a verification token
    const verificationToken = uuid();

    // save the verification token in the database
    await db.subscriptionToken.upsert({
      where: {
        email: email,
      },
      create: {
        email: email,
        token: verificationToken,
      },
      update: {
        token: verificationToken,
      },
    });

    // using resend to send the email to the user

    const { data, error } = await resend.emails.send({
      from: "Abhimanyu Blog <send@blogging.abhimanyu.tech>",
      to: email,
      subject: "Verification Purpose",
      text: "click this link to verify",
      react: VerifyEmail({ validationCode: verificationToken, email: email }),
    });

    console.log("data", data);
    console.log("error", error);

    return { message: "Email sent successfully" };
  } catch (error) {
    console.log(error);
    return { error: "subscription failed" };
  }
};
