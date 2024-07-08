import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  dateAssigned?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  agent?: string | null;
};
