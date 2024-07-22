type Props = {
  styleProps: string;
  value: string;
  setInputNote: React.Dispatch<React.SetStateAction<string>>;
};
function Input({ styleProps, value, setInputNote }: Props) {
  return (
    <input
      className={styleProps}
      value={value}
      onChange={(e) => {
        setInputNote(e.target.value);
      }}
      placeholder="New Note..."
    ></input>
  );
}

export default Input;
