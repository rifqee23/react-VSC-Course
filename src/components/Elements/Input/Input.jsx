// const Input = (props) => {
//   const { name, id, type = "text", placeholder, ref } = props;
//   return (
//     <input
//       className="text-sm border mt-2 rounded-xl py-2 px-3 text-slate-700 "
//       type={type}
//       name={name}
//       id={id}
//       placeholder={placeholder}
//       ref={ref}
//     />
//   );
// };

import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { name, id, type = "text", placeholder } = props;
  return (
    <input
      className="text-sm border mt-2 rounded-xl py-2 px-3 text-slate-700 "
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
