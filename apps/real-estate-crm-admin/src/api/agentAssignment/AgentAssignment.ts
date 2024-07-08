import { Property } from "../property/Property";

export type AgentAssignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateAssigned: Date | null;
  property?: Property | null;
  agent: string | null;
};
