type InputProps = {
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  title: string;
  errMessage: string;
  defaultValue?: string;
  type: string;
  name: string;
} & React.HTMLProps<HTMLInputElement>;

const TextInput = (props: InputProps) => {
  const {
    defaultValue: value,
    type,
    name,
    placeholder,
    onChange,
    errMessage,
    ...rest
  } = props;
  const errorClass = props.errMessage !== "" ? "border-red-500" : "border-gray";
  const className = `w-full p-2 rounded-lg border-2  outline-none text-black focus:border-${props.color} ${errorClass}`;

  return (
    <div className="mb-4">
      <div className="flex mb-1">
        <label
          className="block text-grey-darker text-sm font-bold  mr-1"
          htmlFor="name"
        >
          {props.title}
        </label>
        {props.errMessage !== "" && (
          <span className="text-danger text-sm italic">{props.errMessage}</span>
        )}
      </div>

      <input
        className={className}
        defaultValue={props.defaultValue}
        type={props.type}
        name={props.name}
        placeholder={props.title}
        onChange={props.handleInputChange}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
