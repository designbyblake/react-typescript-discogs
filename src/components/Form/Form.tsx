import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form';

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  className?: string;
};

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  onSubmit,
  children,
  className
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className={className}
      data-testid='form'
    >
      {children(methods)}
    </form>
  );
};
