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
        className="space-y-6 w-full" // Adjusted spacing
      >
        <div
          className={`grid grid-cols-1 ${
            inputFields.length > 2 ? "md:grid-cols-2" : "md:grid-cols-1"
          } gap-6 md:gap-8`}
        >
          {" "}
          {/* Two-column grid */}
          {inputFields.map((input: any) => (
            <div key={input.name}>
              {" "}
              {/* Wrap each field in a div */}
              <FormField
                control={form.control}
                name={input.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      {input.label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={input.type}
                        placeholder={input.placeholder}
                        disabled={loading}
                        {...field}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-600" />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>

        {submitButtonText === "Login" && (
          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-muted-foreground underline hover:text-primary-600 transition"
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
