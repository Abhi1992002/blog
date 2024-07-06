import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // access param named code
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get("code");
  const email2 = searchParams.get("email");
  const baseurl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  console.log("accessing the route");

  if (!code || !email2) {
    console.log("Invalid request");
    return Response.json({ error: "Invalid request" });
  }

  // check if the email is already verified
  const emails = await db.subscription.findUnique({
    where: {
      email: email2,
    },
  });

  if (emails && emails.email) {
    console.log("email already verified");
    return Response.redirect(`${baseurl}/invalid?error=verified`);
  }

  // get the code from the database using email
  const user = await db.subscriptionToken.findUnique({
    where: {
      email: email2,
    },
  });

  if (!user) {
    return Response.redirect(`${baseurl}/invalid`);
  }

  if (user.token !== code) {
    console.log("token not matched");
    console.log("token", user.token);
    console.log("code", code);
    return Response.redirect(`${baseurl}/invalid`);
  }

  // check if the token is not expired ( 15 minutes )
  if (user.updatedAt) {
    const currentTime = new Date().getTime();
    const tokenTime = new Date(user.updatedAt).getTime();
    const difference = currentTime - tokenTime;

    if (difference > 900000) {
      console.log("token expired");
      return Response.redirect(`${baseurl}/invalid?error=expired`);
    }
  } else {
    const currentTime = new Date().getTime();
    const tokenTime = new Date(user.createdAt).getTime();
    const difference = currentTime - tokenTime;

    if (difference > 900000) {
      console.log("token expired");
      return Response.redirect(`${baseurl}/invalid?error=expired`);
    }
  }

  await db.subscription.create({
    data: {
      email: email2,
      confirmed: true,
    },
  });

  return Response.redirect(`${baseurl}/success`);
}
