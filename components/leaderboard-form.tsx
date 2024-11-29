import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { postScore } from "@/actions/scoreActions";

const formSchema = z.object({
  nickname: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(15, {
      message: "Username must be less than 15 characters.",
    }),
});

export default function LeaderboardForm({ score }: { score: number }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await postScore(values.nickname, score);
    return;
  }

  console.log(form.formState.isSubmitSuccessful);

  return form.formState.isSubmitSuccessful ? (
    <span className="text-green-500">Success!</span>
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Nickname</FormLabel> */}
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
  );
}
