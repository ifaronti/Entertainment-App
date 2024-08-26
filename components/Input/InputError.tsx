type InputErrorType = {
  className?: string;
  messages: string[];
};

const InputError = ({ messages, className }: InputErrorType) => (
  <>
    {messages?.map((message, index) => (
      <p className={`${className} text-xs text-red-600`} key={index}>
        {message}
      </p>
    ))}
  </>
);

export default InputError;
