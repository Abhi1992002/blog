import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <form
      className={"flex justify-center items-center h-screen"}
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit">Signin with GitHub</Button>
    </form>
  );
}
