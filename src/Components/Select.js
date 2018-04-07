import * as React from "react";

export default class Select extends React.Component {
  render() {
    const {
      field,
      flag,
      handleChange,
      label,
      options,
      state,
      validation
    } = this.props;
    return (
      <div>
        <label htmlFor={field}>{label}</label>
        <br />
        <select
          id={field}
          name={field}
          onChange={e => handleChange(e, validation.regex)}
          value={state}
        >
          {options.map((option, i) => (
            <option value={option} key={option + i}>
              {option}
            </option>
          ))}
        </select>
        {validation.regex && !flag ? <span>{validation.message}</span> : null}
      </div>
    );
  }
}
