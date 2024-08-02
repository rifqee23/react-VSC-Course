import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { children, name, type, placeholder, ref } = props;
  return (
    <>
      <Label htmlFor={name}>{children}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </>
  );
});

export default InputForm;
