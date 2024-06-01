type InputProps = {
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  title: string;
  errMessage: string;
  value: string;
  type: string;
  name: string;
} & React.HTMLProps<HTMLInputElement>;

const LoginTextInput = (props: InputProps) => {
  const { value, type, name, title, handleInputChange, errMessage, ...rest } =
    props;
  return (
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <input
        value={value}
        type={type}
        name={name}
        className="dark:bg-gray-4 peer block min-h-[auto] w-full rounded border-2 border-gray bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0
    peer-focus:text-employee dark:peer-focus:text-employee"
        onChange={handleInputChange}
        placeholder={title}
        {...rest}
      />
      {value === "" && (
        <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]  peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-employee peer-focus:text-employee">
          {title}
        </label>
      )}
      <span className="text-red-500 text-sm italic"> {errMessage}</span>
    </div>
  );
};

export default LoginTextInput;
