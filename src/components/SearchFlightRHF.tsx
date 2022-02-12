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
    .positive()
    .int()
    .default(1),
});

type Search = z.infer<typeof schema>;

function SearchFlight() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Search>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Search> = useCallback(async (value) => {
    console.log(value);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className='flex flex-col'>
        <input {...register("origin")} placeholder='Origin' />
        <span className='text-red-900'>{errors.origin?.message}</span>
      </label>
      <label className='flex flex-col '>
        <input
          className='border-2 border-black'
          {...register("destination")}
          placeholder='Destination'
        />
        <span className='text-red-900'>{errors.destination?.message}</span>
      </label>
      <label className='flex flex-col'>
        <input {...register("departureDate")} />
        <span className='text-red-900'>{errors.departureDate?.message}</span>
      </label>
      <label className='flex flex-col'>
        <input {...register("returnDate")} />
        <span className='text-red-900'>{errors.returnDate?.message}</span>
      </label>
      <label className='flex flex-col'>
        <input {...register("nAdults")} placeholder='1' />
        <span className='text-red-900'>{errors.nAdults?.message}</span>
      </label>
      <input className='border-2 border-black' type='submit' id='submit' />
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
