export type Reservation = {
  id: number;
  businessDate: string;
  status: string;
  shift: string;
  start: string;
  end: string;
  quantity: number;
  customer: {
    firstName: string;
    lastName: string;
  };
  area: string;
  guestNotes: string;
};

export interface Reservations extends Array<Reservation> {}

export interface sort {
  sortCase: string;
  sort: string;
}

export interface filter {
  caseFilter: string;
  filter: string;
}

export interface dateFilter {
  startDate: string;
  endDate: string;
}
