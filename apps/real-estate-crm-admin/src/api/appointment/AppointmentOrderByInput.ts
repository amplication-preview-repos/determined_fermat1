import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  clientId?: SortOrder;
  date?: SortOrder;
  notes?: SortOrder;
  propertyId?: SortOrder;
};
