import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { DEFAULT_FORM_FIELD_CLASSNAMES } from "../components/Form";
import classNames from "classnames";

interface IFormInputs {
  origin: string;
  destination: string;
}

function SearchFlight() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log("form data is", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name='origin'
          control={control}
          defaultValue='AMS'
          render={({ field }) => (
            <TextField
              {...field}
              type='text'
              label='origin'
              variant='outlined'
              error={!!errors.origin}
              helperText={errors.origin ? errors.origin?.message : ""}
            />
          )}
        />
        <Controller
          name='destination'
          control={control}
          defaultValue='LON'
          render={({ field }) => (
            <TextField
              {...field}
              type='text'
              label='destination'
              variant='outlined'
              error={!!errors.destination}
              helperText={errors.destination ? errors.destination?.message : ""}
            />
          )}
        />
        <input type='submit' id='submit' />
      </form>
    </div>
  );
}

export default SearchFlight;
