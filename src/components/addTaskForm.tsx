// Form
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// prettier-ignore
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'

export default function AddTaskForm() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  })

  // // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  // const form = useForm()
  return (
    <div className="">
      <hr className="bg-[#999999] h-[2px] m-2" />
      <h2>Категорія</h2>
      <p className="text-xs flex">
        <span className="text-accent">домашні справи &nbsp; </span> робота фітнес
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Заголовок</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} className="bg-white" />
                </FormControl>
                {/* <FormDescription>This is your public display name.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Примітка</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} className="bg-white h-28" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons cancel/save */}
          <div className="flex justify-end gap-1 mt-6">
            <Button className="bg-red-500" type="submit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3_465)">
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_465">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Скасувати
            </Button>
            <Button className="bg-accent" type="submit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3_460)">
                  <path
                    d="M8.99997 16.17L4.82997 12L3.40997 13.41L8.99997 19L21 7.00003L19.59 5.59003L8.99997 16.17Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_460">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Зберегти
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
