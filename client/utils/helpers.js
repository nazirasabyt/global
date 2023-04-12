import { format } from "date-fns";
import Cookies from "js-cookie";
import Router from "next/router";

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
    return auth ? JSON.parse(auth) : null;
  }
};
export const getLocalStorageJWT = () => {
  if (typeof window !== "undefined") {
    let auth = localStorage.getItem("auth");
    return auth ? JSON.parse(auth.jwt) : "";
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

export default async function fetcher(url, option = {}) {
  let response;
  if (!option) {
    response = await fetch(url);
  } else {
    response = await fetch(url, option);
  }

  const data = await response.json();
  return data;
}

// export const setToken = (data) => {
//   if (typeof window === undefined) {
//     return;
//   }
//   Cookies.set("id", data.user.id);
//   Cookies.set("username", data.user.username);
//   Cookies.set("jwt", data.jwt);

//   if (Cookies.get("username")) {
//     Router.reload("/");
//   }
// };

// export const unsetToken = () => {
//   if (typeof window === "undefined") {
//     return;
//   }

//   Cookies.remove("id");
//   Cookies.remove("username");
//   Cookies.remove("jwt");
// };

// export const getUserFromLocalCookie = () => {
//   return Cookies.get("username");
// };
// export const getIdFromLocalCookie = () => {
//   return Cookies.get("id");
// };
// export const getTokenFromLocalCookie = () => {
//   return Cookies.get("jwt");
// };
// export const getTokenFromServer = () => {
//   return Cookies.get("username");
// };
