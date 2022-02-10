import React, { useCallback, VFC } from "react";
import { NestedValue, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Select, MenuItem } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const schema = z.object({
  origin: z.string({
    required_error: "Origin is required",
    invalid_type_error: "Origin must be a string",
  }),
  destination: z.string({
    required_error: "Destination is required",
    invalid_type_error: "Destination must be a string",
  }),
  departureDate: z.date({
    required_error: "Departure date is required",
    invalid_type_error: "Departure date must be a date",
  }),
  returnDate: z
    .date({
      invalid_type_error: "Return date must be a date",
    })
    .nullable(),
  nAdults: z
    .number({
      invalid_type_error: "Number of adults must be an integer",
    })
    .default(1),
});

type Search = z.infer<typeof schema>;

function SearchFlight() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Search>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Search> = useCallback(async (value) => {
    console.log(value);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input name='origin' ref={register} placeholder='Origin' />
        <span>{errors.origin?.message}</span>
      </label>
      <label>
        <input name='destination' ref={register} placeholder='Destination' />
        <span>{errors.destination?.message}</span>
      </label>
      <label>
        <input name='departureDate' ref={register} />
        <span>{errors.departureDate?.message}</span>
      </label>
      <label>
        <input name='returnDate' ref={register} />
        <span>{errors.returnDate?.message}</span>
      </label>
      <label>
        <input name='nAdults' ref={register} placeholder='1' />
        <span>{errors.nAdults?.message}</span>
      </label>
    </form>
  );
}

// function SearchFlightForm() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<{
//     autocomplete: NestedValue<Option[]>;
//     select: NestedValue<number[]>;
//     resolver: zodResolver(schema);
//   }>({
//     defaultValues: { autocomplete: [], select: [] },
//   });

//   const onSubmit = handleSubmit((data) => console.log(data));

//   React.useEffect(() => {
//     register("autocomplete", {
//       validate: (value) => value.length || "This is required.",
//     });
//     register("select", {
//       validate: (value) => value.length || "This is required.",
//     });
//   }, [register]);

//   return (
//     <form onSubmit={onSubmit}>
//       <Autocomplete
//         options={options}
//         getOptionLabel={(option: Option) => option.label}
//         onChange={(e, options) => setValue("autocomplete", options)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             error={Boolean(errors?.autocomplete)}
//             helperText={errors?.autocomplete?.message}
//           />
//         )}
//       />

//       <Select
//         value=''
//         onChange={(e) => setValue("muiSelect", e.target.value as number[])}
//       >
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//       </Select>

//       <input type='submit' />
//     </form>
//   );
// }

export default SearchFlight;
