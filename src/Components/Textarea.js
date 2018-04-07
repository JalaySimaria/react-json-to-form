import * as React from "react";

export default class Textarea extends React.Component {
  render() {
    const { field, flag, handleChange, label, state, validation } = this.props;
    return (
      <div>
        <label htmlFor={field}>{label}</label>
        <br />
        <textarea
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
