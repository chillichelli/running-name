/* eslint-disable react/jsx-key */
//@ts-nocheck
import React, { useCallback, useState, VFC } from "react";
import { NestedValue, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, Select, MenuItem } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import debounce from "lodash.debounce";
import { trpc } from "@/utils/trpc";
import Locations from "@/Locations";

const schema = z.object({
  origin: z.string({
    required_error: "Origin is required",
    invalid_type_error: "Origin must be a string",
  }),
  destination: z.string({
    required_error: "Destination is required",
    invalid_type_error: "Destination must be a string",
  }),
  nAdults: z
    .number({
      invalid_type_error: "Number of adults must be a positive integer",
    })
    .default(1),
});

type Search = z.infer<typeof schema>;

const getFilteredItems = (query: any, items: any) => {
  console.log("called getFilteredItems");
  if (!query) {
    return items;
  }
  return items.filter((location) =>
    location.Location.toLowerCase().includes(query.toLowerCase())
  );
};

function SearchFlight() {
  const [query, setQuery] = useState("");

  const locations = Locations;
  const filteredItems = getFilteredItems(query, locations);
  const updateQuery = (e) => setQuery(e?.target?.value);
  const debouncedOnChange = debounce(updateQuery, 200);

  //   return (
  //     <div className='Search'>
  //       <label>Search</label>
  //       <input type='text' onChange={debouncedOnChange} placeholder='Search' />
  //       <ul>
  //         {filteredItems.map((value) => (
  //           <h1 key={value.Airport}>{value.Location}</h1>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Search>({
    defaultValues: { origin: "AMS", destination: "JKT", nAdults: 5 },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Search> = useCallback(async (value: Search) => {
    console.log(value);
    setQuery(value);
  }, []);

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          type='text'
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Origin'
        />
        <span className='text-red-900'>{errors.origin?.message}</span>
      </label>
      <label>
        <input
          type='text'
          {...register("destination")}
          placeholder='Destination'
        />
        <span className='text-red-900'>{errors.destination?.message}</span>
      </label>
      <label>
        <input
          type='number'
          min='1'
          {...register("nAdults", {
            valueAsNumber: true,
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a number",
            },
          })}
        />
        <span className='text-red-900'>{errors.nAdults?.message}</span>
      </label>
      <input type='submit' id='submit' />
    </form>
  );
}

export default SearchFlight;
