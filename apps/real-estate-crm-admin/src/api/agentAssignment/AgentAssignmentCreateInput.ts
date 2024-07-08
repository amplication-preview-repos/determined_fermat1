import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  dateAssigned?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  agent?: string | null;
};
