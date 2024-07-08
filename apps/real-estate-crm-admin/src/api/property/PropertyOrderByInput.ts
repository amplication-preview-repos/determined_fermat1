import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  description?: SortOrder;
};
