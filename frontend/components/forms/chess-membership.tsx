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
import { chessMembershipAssociations } from "@/lib/data";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { toast } from "sonner";

const formSchema = z.object({
  associations: z.string().array().nonempty(),
  file: z
    .instanceof(File, { message: "File is required" })
    .refine(
      (file) =>
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel",
      {
        message: "Only Excel files (.xlsx, .xls) are allowed",
      }
    ),
});

export function ChessMembershipForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      associations: ["FIDE"],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast(
      JSON.stringify({
        associations: values.associations,
        file: values?.file,
      })
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="associations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Associations</FormLabel>
              <FormDescription>
                Official chess governing associations (if you do not see that
                which you want please raise an issue in{" "}
                <Link
                  href="https://github.com/nagxsan/arbichess"
                  target="_blank"
                >
                  https://github.com/nagxsan/arbichess
                </Link>
                )
              </FormDescription>
              {chessMembershipAssociations.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="associations"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormDescription className="whitespace-pre-line">{`Make sure the file follows these rules:
                    - There must be no extra columns or rows before the table. The table headings must be in row 1 and the data must start from row 2 and the columns must start from row A.
                    - Whichever associations you select, make sure the corresponding id column heading is formatted as "associationName_ID", for example, if you select FIDE, then your spreadsheet must contain the column heading as FIDE_ID and so on.
                    - The file must be a spreadsheet file such as Excel files.
              `}</FormDescription>
              <FormControl>
                <Input
                  type="file"
                  accept=".xls,.xlsx"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
