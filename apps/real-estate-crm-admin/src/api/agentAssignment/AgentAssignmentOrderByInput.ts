import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateAssigned?: SortOrder;
  propertyId?: SortOrder;
  agent?: SortOrder;
};
