import request, { gql } from "graphql-request";
import { Car } from "./types";

export const getCarsList = async (): Promise<Car[]> => {
  const query = gql`
    {
      carLists {
        name
        carImage {
          url
        }
        carAvg
        price
        carType
        carBrand
        publishedAt
        updatedAt
      }
    }
  `;
  const result = await request<{ carLists: Car[] }>(
    "https://ap-south-1.cdn.hygraph.com/content/cmf76qzvl00ql08vvu5pgdpjh/master",
    query
  );

  return result.carLists;
};

/*--------------------------------------------------------*/

export const getCarBrands = async (): Promise<string[]> => {
  const brandquery = gql`
    {
      carLists {
        carBrand
      }
    }
  `;

  const result = await request<{
    carLists: { carBrand: string }[];
  }>(
    "https://ap-south-1.cdn.hygraph.com/content/cmf76qzvl00ql08vvu5pgdpjh/master",
    brandquery
  );

  const uniqueBrands = [
    ...new Set(result.carLists.map((car) => car.carBrand)),
  ].sort((a, b) => a.localeCompare(b));

  return uniqueBrands;
};
