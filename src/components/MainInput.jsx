import PropTypes from "prop-types";

const MainInput = ({
  heading,
  placeholder,
  type,
  options,
  inputType,
  onChange,
  name,
  value
}) => {
  return (
    <div className="flex-1">
      <p className="font-[500]">{heading}</p>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey"
          placeholder={placeholder}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input
          type="file"
          name={name}
          onChange={onChange}
          className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey   "
          placeholder={placeholder}
        />
      ) : (
        <input
          name={name}
          value={value}
          type={inputType ? inputType : "text"}
          onChange={onChange}
          className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey "
          placeholder={placeholder}
        />
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
    PropTypes.string || PropTypes.number || PropTypes.array || PropTypes.object
};

export default MainInput;
