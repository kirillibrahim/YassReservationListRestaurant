import {
  Reservations,
  Reservation,
  sort,
  filter
} from "../constants/Interfaces/ReservationListInterface";

export const filterReservations = (
  reservations: Reservations,
  filter: filter
): Reservations => {
  //console.log(filter);
  if (filter.filter) {
    switch (filter.caseFilter) {
      case "state":
        return reservations.filter(
          (item: Reservation) => item.status === filter.filter
        );
      case "shifts":
        return reservations.filter(
          (item: Reservation) => item.shift === filter.filter
        );
      case "area":
        return reservations.filter(
          (item: Reservation) => item.area === filter.filter
        );
      case "date":
        return reservations.filter((item: Reservation) => {
          // console.log(item);
          if (
            new Date(item.start) >= filter.filter.startDate &&
            new Date(item.end) <= filter.filter.endDate
          ) {
            return item;
          }
        });
      default:
        return reservations;
    }
  } else {
    return reservations;
  }
};

export const sortBy = (reservations: Reservations, sortedField: sort) => {
  let sortedProducts = [...reservations];
  //console.log(sortedField);
  if (sortedField.sortCase === "id") {
    if (sortedField.sort === "asc") {
      sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (sortedField.sort === "desc") {
      sortedProducts.sort((a, b) => (a.id < b.id ? 1 : -1));
    }
  } else if (sortedField.sortCase === "name") {
    if (sortedField.sort === "asc") {
      sortedProducts.sort((a, b) =>
        a.customer.firstName.concat(" ", a.customer.lastName) >
        b.customer.firstName.concat(" ", b.customer.lastName)
          ? 1
          : -1
      );
    } else if (sortedField.sort === "desc") {
      sortedProducts.sort((a, b) =>
        a.customer.firstName.concat(" ", a.customer.lastName) <
        b.customer.firstName.concat(" ", b.customer.lastName)
          ? 1
          : -1
      );
    }
  }
  return sortedProducts;
};
