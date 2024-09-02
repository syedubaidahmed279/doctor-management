/* eslint-disable react/prop-types */

import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function AuthForm({
  inputFields,
  onSubmit,
  submitButtonText,
}: any) {
  // const { loading, setLoading } = useContext(UserContext);

  const schemaFields: any = {};
  inputFields.forEach((field) => {
    schemaFields[field.name] = field.validation;
  });
  const formSchema = z.object(schemaFields);

  const defaultValues: any = {};
  inputFields.forEach((field) => {
    defaultValues[field.name] = field.defaultValue || '';
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = async (data) => {
    // setLoading(true);
    try {
      await onSubmit(data);
      // navigate("/");
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-2 w-full'
      >
        {inputFields.map((input) => (
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
                    // disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          // disabled={loading}
          className='ml-auto w-full'
          type='submit'
        >
          {submitButtonText}
        </Button>
      </form>
    </Form>
  );
}
