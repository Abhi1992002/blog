import { SignIn } from "@/components/auth/sign-in";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const SigninPage = async () => {
  const session = await auth();
  if (session) {
    redirect("/create");
  }
  return <SignIn />;
};

export default SigninPage;
