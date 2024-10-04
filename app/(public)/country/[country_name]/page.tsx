import { CountryDetails } from "@/types/type";
import Link from "next/link";

function CountryName({ params }: { params: { country_name: string } }) {

  const CountryDetails : CountryDetails[] = [
    {
      name: "Pakistan",
      population: 251269164,
      capital: "Islamabad",
    },
    {
      name: "Japan",
      population: 123753041,
      capital: "Tokyo",
    },
    {
      name: "Bangladesh",
      population: 173562364,
      capital: "Dhaka",
    },
    {
      name: "China",
      population: 1419321278,
      capital: "Beijing",
    },
    {
      name: "Russia",
      population: 144820423,
      capital: "Moscow",
    },
]

    const country = CountryDetails.find(
      (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );

  if (!country) {
    return (
      <div>
        <h1>
          {params.country_name} country not found
        </h1>
      </div>
    );
  }

  return (
    <div  className="flex gap-10 flex-col items-center mt-20 font-semibold">
      <div> Name : {country.name}</div>
      <div> Capital : {country.capital}</div>
      <div> Population : {country.population}</div>

      <button className="bg-red-600 mt-10 px-4 py-1 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 ">
        <Link href={"/country"}> Back</Link>{" "}
      </button>
    </div>
  );
}

export default CountryName;