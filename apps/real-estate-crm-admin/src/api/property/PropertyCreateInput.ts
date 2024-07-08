import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  name?: string | null;
  address?: string | null;
  price?: number | null;
  status?: "Option1" | null;
  description?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
};
