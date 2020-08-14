import React from "react";
import { useForm, ErrorMessage, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import ReactDatePicker from "react-datepicker";

export default () => {
  const { state, action } = useStateMachine(updateAction);
  const { handleSubmit, register, errors, control } = useForm({
    defaultValues: state.yourDetails
  });
  const { push } = useHistory();
  const onSubmit = (data) => {
    action(data);
    push("/step2");
  };

  const onChange = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <div>
        <label htmlFor="isOfficial">For official use only?</label>
        <input type="checkbox" name="isOfficial" value="yes" ref={register} />
      </div>
      <div>
        <label htmlFor="type-of-event">ASR</label>
        <input
          type="checkbox"
          name="type-of-event"
          value="ASR"
          onChange={onChange}
          ref={register({ required: "Please select type of event" })}
        />
      </div>
      <div>
        <label htmlFor="type-of-event">AIRPROX/ATC</label>
        <input
          type="checkbox"
          name="type-of-event"
          value="AIRPROX/ATC"
          onChange={onChange}
          ref={register({ required: "Please select type of event" })}
        />
      </div>
      <div>
        <label htmlFor="type-of-event">TCAS RA</label>
        <input
          type="checkbox"
          name="type-of-event"
          value="TCAS RA"
          onChange={onChange}
          ref={register({ required: "Please select type of event" })}
        />
      </div>
      <div>
        <label htmlFor="type-of-event">WAKE TURBULENCE</label>
        <input
          type="checkbox"
          name="type-of-event"
          value="WAKE TURBULENCE"
          onChange={onChange}
          ref={register({ required: "Please select type of event" })}
        />
      </div>
      <label>
        CAPT:
        <input name="CAPT" ref={register({ required: "This is required." })} />
        <ErrorMessage errors={errors} name="CAPT" as="p" />
      </label>
      <label>
        F/O:
        <input name="F/O" ref={register({ required: "This is required." })} />
        <ErrorMessage errors={errors} name="F/O" as="p" />
      </label>
      <label>
        F/E:
        <input name="F/E" ref={register({ required: "This is required." })} />
        <ErrorMessage errors={errors} name="F/E" as="p" />
      </label>
      <section>
        <label>React Datepicker</label>
        <Controller
          as={ReactDatePicker}
          control={control}
          valueName="selected" // DateSelect value's name is selected
          onChange={([selected]) => selected}
          name="ReactDatepicker"
          className="input"
          placeholderText="Select date"
        />
      </section>
      <input type="submit" />
    </form>
  );
};
