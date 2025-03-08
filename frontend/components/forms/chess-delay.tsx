"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { chessDelayFormFields } from "@/lib/data";

const formSchema = z.object({
  delay: z
    .coerce
    .number({
      required_error: "Delay is required",
      invalid_type_error: "Delay must be a number",
    })
    .int({ message: "Delay must be a whole number not fractional or decimal" })
    .min(1, {
      message: "Delay must be minimum of 1 minute",
    }),
  ftpHost: z.union([z.string().ip(), z.string().url()], {
    required_error: "FTP Host is required",
    invalid_type_error: "FTP Host can be an IP address or a valid URL",
  }),
  ftpUsername: z
    .string({
      required_error: "FTP username is required",
      invalid_type_error: "FTP username must be a string",
    })
    .min(1, {
      message: "FTP username must not be empty",
    }),
  ftpPassword: z
    .string({
      required_error: "FTP password is required",
      invalid_type_error: "FTP password must be a string",
    })
    .min(1, {
      message: "FTP password must not be empty",
    }),
  remotePath: z
    .string({
      required_error: "Remote path on FTP server is required",
      invalid_type_error: "Remote path on FTP server must be a string",
    })
    .min(1, {
      message: "Remote path must not be empty",
    }),
});

export function ChessDelayForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      delay: 0,
      ftpHost: "",
      ftpUsername: "",
      ftpPassword: "",
      remotePath: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {chessDelayFormFields.map((formField, idx) => (
          <FormField
            key={idx}
            control={form.control}
            name={formField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formField.formLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formField.inputPlaceholder}
                    type={formField.inputType}
                    {...field}
                  />
                </FormControl>
                <FormDescription>{formField.formDescription}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
