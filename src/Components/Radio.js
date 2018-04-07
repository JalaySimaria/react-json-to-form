import * as React from "react";

export default class Radio extends React.Component {
  render() {
    const {
      field,
      flag,
      handleChange,
      label,
      options,
      validation
    } = this.props;
    return (
      <div>
        <label htmlFor={field}>{label}</label>
        <br />
        {options.map((option, i) => (
          <div key={option + i}>
            <input
              type="radio"
              name={field}
              value={option}
              onChange={e => handleChange(e, validation.regex)}
            />
            {option}
          </div>
        ))}
        {validation.regex && !flag ? <span>{validation.message}</span> : null}
      </div>
    );
  }
}
