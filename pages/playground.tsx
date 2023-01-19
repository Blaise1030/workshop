import { Box } from "@mui/system";
import { ReactElement } from "react";

function TreeView({ data }: { data: TData }) {
  return <div>Lets do it here</div>;
}

function FilterChips<T extends object>({ filters }: { filters: TFilter<T>[] }) {
  return <div>Lets do it here</div>;
}

function DynamicRenderer<T>({
  componentProps,
  componentMaps,
  component,
}: {
  componentMaps: { [k: string]: ReactElement };
  componentProps: any;
  component: string;
}) {
  return <div>Lets do it here</div>;
}

export default function Playground() {
  return <Box>This is the playground</Box>;
}

// Recursive components
type TData = { label: string; link: string; children: TData[] };
type TFilter<T extends object> =
  | FieldFilter<T, keyof T>
  | { or: TFilter<T>[] | null }
  | { and: TFilter<T>[] | null }
  | { not: TFilter<T>[] | null };

type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

type SearchableBooleanFilterInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

type SearchableFloatFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
};

type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
};

type TPrimitiveFilter =
  | SearchableStringFilterInput
  | SearchableBooleanFilterInput
  | SearchableIntFilterInput
  | SearchableFloatFilterInput;

export type TFilterKeys = SearchableStringFilterInput &
  SearchableBooleanFilterInput &
  SearchableIntFilterInput &
  SearchableFloatFilterInput;

type FieldFilter<T extends object, K extends keyof T> = {
  [k in K]?: TPrimitiveFilter;
};
