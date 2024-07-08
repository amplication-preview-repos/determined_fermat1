import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AgentAssignmentWhereInput = {
  id?: StringFilter;
  dateAssigned?: DateTimeNullableFilter;
  property?: PropertyWhereUniqueInput;
  agent?: StringNullableFilter;
};
