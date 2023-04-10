import { format } from "date-fns";
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const addOrUpdateItem = (arr, item) => {
  let tempArr = [];
  const tempItem = arr.find((currentItem) => currentItem.id === item.id);
  if (tempItem) {
    tempArr = arr.map((currentItem) => {
      if (currentItem.id === item.id) currentItem = item;
      return currentItem;
    });
  } else {
    tempArr = [...arr, item];
  }
  return tempArr;
};

export const getLocalStorageAuth = () => {
  if (typeof window !== "undefined") {
    let auth = localStorage.getItem("auth");
    return auth
      ? JSON.parse(auth)
      : {
          firstName: "",
          lastName: "",
          email: "",
          accessToken: "",
          privateKey: "",
        };
  }
};
export const getLocalStoragePax = () => {
  if (typeof window !== "undefined") {
    let formData = localStorage.getItem("formData");
    return formData
      ? JSON.parse(formData)
      : {
          from: "",
          to: "",
          departure: format(new Date(), "y-MM-dd"),
          return: format(new Date(), "y-MM-dd"),
          pax: [],
        };

    // let paxData = localStorage.getItem("passengersData");
    // if (!localStorage.getItem("passengersData") || paxData.length === 0) {
    //   try {
    //     localStorage.setItem("passengersData", JSON.stringify({}));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }
};

const fetchAPI = async () => {
  const res = await fetch(
    `${process.env.API_URL || "https://portfolio-app.global.com"}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
};

export const getFlights = async () => {
  const data = await fetchAPI(`query Flights{
    flights{
     id
     title
     category{
      id 
      name
     }
    }
  }`);
  return data.flights;
};
