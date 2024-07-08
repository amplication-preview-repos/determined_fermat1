import { Appointment } from "../appointment/Appointment";
import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  price: number | null;
  status?: "Option1" | null;
  description: string | null;
  appointments?: Array<Appointment>;
  agentAssignments?: Array<AgentAssignment>;
};
