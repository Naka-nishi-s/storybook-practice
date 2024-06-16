import { FormEvent } from "react";

interface Field {
  name: string;
  type: string;
  label: string;
}

export interface FormProps {
  fields: Field[];
  color?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ fields = [], color, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <div key={field.name} style={{ color }}>
          <label>
            {field.label}
            <input type={field.type} name={field.name} id={field.name} />
          </label>
        </div>
      ))}
      <button type="submit">送信</button>
    </form>
  );
};
