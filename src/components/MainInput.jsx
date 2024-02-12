
import PropTypes from "prop-types";

const MainInput = ({ heading, placeholder, type, options }) => {
  return (
    <div className="">
      <p className="font-[500]">{heading}</p>
      {type === "select" ? (
        <select
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
      ) : (
        <input
          type="text"
          className="shadow-[0px_2px_2px_rgba(0,_0,_0,_0.25)_inset] w-full rounded-[0.75rem] px-4 py-3 mt-3 bg-lightGrey"
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
  options: PropTypes.array
};

export default MainInput;
