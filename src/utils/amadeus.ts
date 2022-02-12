const Amadeus = require("amadeus");

export const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

export const getLocations = async (keyword: string) => {
  const locations = await amadeus.referenceData.locations.get({
    keyword: keyword,
    subType: "CITY",
  });

  return locations.result.data;
};
