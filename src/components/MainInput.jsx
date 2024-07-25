import PropTypes from "prop-types";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const MainInput = ({
  heading,
  placeholder,
  type,
  options,
  inputType,
  onChange,
  name,
  value,
  values,
  font,
  onKeyDown,
  showPassword,
  setShowPassword
}) => {
  const increaseTextareaHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${25 + e.target.scrollHeight}px`;
  };
  return (
    <div className="relative">
      <p className="font-[500]">{heading}</p>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey ${
            font ? `text-${font}` : "text-base"
          }`}
          placeholder={placeholder}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option value={values[index]} key={index}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <label className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey block cursor-pointer">
          <div className="">{value ? value : "Upload"}</div>
          <input
            type="file"
            accept=".png, .jpg"
            name={name}
            onChange={onChange}
            // value={value}
            className="opacity-0 absolute w-0 h-0"
            placeholder={placeholder}
          />
        </label>
      ) : type === "long-text" ? (
        <textarea
          onKeyUp={increaseTextareaHeight}
          name={name}
          value={value}
          type={inputType ? inputType : "text"}
          onChange={onChange}
          className={`shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey min-h-[7rem] overflow-hidden ${
            font ? `text-[${font}]` : "text-base"
          } `}
          style={{ resize: "none" }}
          placeholder={placeholder}
        />
      ) : (
        <>
          <input
            name={name}
            value={value}
            // onMouseDown={}
            type={
              inputType
                ? inputType === "password" && showPassword
                  ? "text"
                  : "password"
                : type
            }
            onChange={onChange}
            className={`shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey ${
              font ? `text-[${font}]` : "text-base"
            } `}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
          />
          {inputType === "password" && (
            <div
              className="absolute top-[3.125rem] right-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-[1.25rem]" />
              ) : (
                <FaEye className="text-[1.25rem]" />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

MainInput.propTypes = {
  heading: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value:
    PropTypes.string || PropTypes.number || PropTypes.array || PropTypes.object,
  font: PropTypes.string,
  values: PropTypes.array,
  onKeyDown: PropTypes.func,
  showPassword: PropTypes.bool,
  setShowPassword: PropTypes.func
};

export default MainInput;
