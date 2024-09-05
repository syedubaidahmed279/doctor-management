/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Logo from "../global/logo";

export default function Auth({ title, children, subtitle }: any) {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="" prefetch={false}>
              <Logo url="/logo-new.png" />
            </Link>
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {subtitle ? (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Enter your details below to {title}
              </p>
            )}
          </div>
          {children}
          {title !== "Create Admin" && (
            <>
              {title === "Login" ? (
                <>
                  <p className="px-8 text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                      href="/signup"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Signup now
                    </Link>{" "}
                  </p>
                </>
              ) : (
                <p className="px-8 text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Login now
                  </Link>{" "}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
