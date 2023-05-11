import ReactSelect from 'react-select';
import classNames from 'classnames';
import { InputWrapper } from './InputWrapper';

export type ErrorType = {
  error?: string;
  errorClassName?: string;
}

type SelectProps = ErrorType & {
  id: string;
  options: any[],
  selectedOption: any,
  onChange: (option: { value: string, label: string }) => void,
  value: { value: string, label: string },
  className?: string,
  label: string;
  isMulti?: boolean;
  labelClassName?: string;
  labelHidden?: boolean;
  placeholder?: string;
  dirty?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  appendClassName?: string;
  unstyled?: boolean;
};

export const Select = ({
  options,
  selectedOption,
  className = 'asm-select',
  onChange,
  value,
  appendClassName,
  disabled = false,
  required = false,
  labelHidden = false,
  isMulti = false,
  placeholder,
  id,
  label,
  labelClassName,
  error,
  errorClassName,
  dirty,
  style,
  unstyled = false,
  ...rest }: SelectProps) => {
  return (
    <InputWrapper
      labelHidden={labelHidden}
      labelClassName={labelClassName}
      htmlFor={id}
      required={required}
      label={label}
      error={error}
      className={
        classNames(
          className,
          error && 'asm-input-error',
          dirty && 'asm-input--dirty',
          appendClassName
        )
      }
      errorClassName={errorClassName}
      style={style}
    >
      <ReactSelect
        id={id}
        defaultValue={selectedOption}
        onChange={onChange}
        options={options}
        required={required}
        aria-labelledby={id}
        aria-label={label}
        placeholder={placeholder}
        isDisabled={disabled}
        value={value}
        unstyled={unstyled}
        isMulti={isMulti}
        {...rest}
      />
    </InputWrapper>
  );
}
