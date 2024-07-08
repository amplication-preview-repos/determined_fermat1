import { StringFilter } from "../../util/StringFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  notes?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};
