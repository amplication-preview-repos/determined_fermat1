import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  client?: Client | null;
  date: Date | null;
  notes: string | null;
  property?: Property | null;
};
