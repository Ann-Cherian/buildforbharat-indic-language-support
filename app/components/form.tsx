type FormProps = {
  placeholder: string;
  action: string;
  onSubmit: (formData: FormData) => Promise<void>;
};

export default function Form({ placeholder, action, onSubmit }: FormProps) {
  return (
    <form action={onSubmit}>
      <div className="flex border-b pr-6 gap-x-6">
        <input
          className="bg-black flex-1 border-r p-6"
          type="text"
          name="query"
          placeholder={placeholder}
        />
        <button type="submit">{action}</button>
      </div>
    </form>
  );
}
