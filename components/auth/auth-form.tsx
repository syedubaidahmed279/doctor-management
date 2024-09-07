/* eslint-disable react/prop-types */
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context";
import Link from "next/link";

export default function AuthForm({
  inputFields,
  onSubmit,
  submitButtonText,
}: any) {
  const { loading, setLoading } = useAppContext();
  const router = useRouter();

  const schemaFields: any = {};
  inputFields.forEach((field: any) => {
    schemaFields[field.name] = field.validation;
  });

  const createFormSchema = (type: any) => {
    let formSchema: any = z.object(schemaFields);

    if (type === "Signup") {
      formSchema = formSchema.superRefine(
        ({ confirmPassword, password }: any, ctx: any) => {
          if (confirmPassword !== password) {
            ctx.addIssue({
              code: "custom",
              message: "The passwords did not match",
              path: ["confirmPassword"],
            });
          }
        }
      );
    }

    return formSchema;
  };

  const formSchema = createFormSchema(submitButtonText);

  const defaultValues: any = {};
  inputFields.forEach((field: any) => {
    defaultValues[field.name] = field.defaultValue || "";
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-2 w-full"
      >
        {inputFields.map((input: any) => (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  <Input
                    type={input.type}
                    placeholder={input.placeholder}
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        ))}

        {submitButtonText === "Login" && (
          <div>
            <Link
              href="/forgot-password"
              className="text-center text-sm text-muted-foreground mt-1.5 hover:underline"
            >
              Forgot password?{" "}
            </Link>
          </div>
        )}

        <Button
          disabled={loading}
          className="w-full relative z-50"
          type="submit"
        >
          {submitButtonText}
        </Button>
      </form>
    </Form>
  );
}
