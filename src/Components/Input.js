import * as React from "react";

export default class Input extends React.Component {
  render() {
    const {
      field,
      flag,
      handleChange,
      label,
      state,
      type,
      validation
    } = this.props;
    return (
      <div>
        <label htmlFor={field}>{label}</label>
        <br />
        <input
          type={type}
          id={field}
          name={field}
          onChange={e => handleChange(e, validation.regex)}
          value={state}
        />
        {validation.regex && !flag ? <span>{validation.message}</span> : null}
      </div>
    );
  }
}
