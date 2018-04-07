import * as React from "react";
import { Input, Textarea, Select, Radio } from "./Components";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const { formJSON } = this.props;
    let state = {
      validation: {}
    };
    for (let field in formJSON) {
      if (field !== "onSubmit") {
        state[field] = "";
        if (formJSON[field].validation) {
          if (formJSON[field].validation.regex) state.validation[field] = false;
        }
      }
    }
    this.setState({ ...state });
  }

  handleChange = (e, regex) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      validation: {
        ...this.state.validation,
        [name]: regex ? regex.test(value) : true
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { validation, ...state } = this.state;
    for (let field in validation) {
      if (!validation[field]) {
        alert("form validation error");
        return;
      }
    }
    this.props.formJSON.onSubmit(state);
  };

  render() {
    const { formJSON } = this.props;
    return (
      <form onSubmit={e => this.submitHandler(e)} noValidate>
        <fieldset>
          <legend>Dynamic Form From JSON:</legend>
          {Object.keys(formJSON).map(key => {
            const field = formJSON[key];
            const { validation } = field;
            switch (formJSON[key].type) {
              case "input":
              case "email":
                return (
                  <Input
                    key={key}
                    type={formJSON[key].type}
                    field={key}
                    label={field.label}
                    state={this.state[key]}
                    flag={this.state.validation[key]}
                    validation={validation}
                    handleChange={this.handleChange.bind(this)}
                  />
                );
              case "textarea":
                return (
                  <Textarea
                    key={key}
                    field={key}
                    label={field.label}
                    state={this.state[key]}
                    flag={this.state.validation[key]}
                    validation={validation}
                    handleChange={this.handleChange.bind(this)}
                  />
                );
              case "select":
                return (
                  <Select
                    key={key}
                    field={key}
                    label={field.label}
                    state={this.state[key]}
                    flag={this.state.validation[key]}
                    options={field.options}
                    validation={validation}
                    handleChange={this.handleChange.bind(this)}
                  />
                );
              case "radio":
                return (
                  <Radio
                    key={key}
                    field={key}
                    label={field.label}
                    flag={this.state.validation[key]}
                    options={field.options}
                    validation={validation}
                    handleChange={this.handleChange.bind(this)}
                  />
                );
              default:
                return null;
            }
          })}
          <br />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}
