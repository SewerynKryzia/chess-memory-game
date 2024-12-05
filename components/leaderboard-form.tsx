import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { postScore } from "@/actions/scoreActions";
import { useState } from "react";

const formSchema = z.object({
  nickname: z
    .string()
    .trim()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(15, {
      message: "Username must be no more than 15 characters.",
    }),
});

export default function LeaderboardForm({ score }: { score: number }) {
  const [error, setError] = useState<null | string>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    const result = await postScore(values.nickname, score);
    if (typeof result === "object") {
      setError(result.errMsg);
    }
    return;
  }

  return form.formState.isSubmitSuccessful && !error ? (
    <span className="text-green-500">Success!</span>
  ) : (
    <>
      {error && <span className="text-rose-500">{error}</span>}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your nickname"
                    {...field}
                    className="m-auto w-[90%]"
                  />
                </FormControl>
                <FormDescription className="m-auto w-[90%]">
                  min 2, max 15 characters
                </FormDescription>
                <FormMessage className="m-auto w-[90%]" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="secondary"
            className="m-auto block w-[90%]"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
}
