import { DefaultOptionType } from "antd/es/cascader";

export const FORM_ITEM_LAYOUT = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export const TIMING_REQUEST_OPTIONS: DefaultOptionType[] = [
  {
    label: "IMPERATIF",
    value: "IMPERATIF",
  },
  {
    label: "TRES URGENT",
    value: "TRES URGENT",
  },
  {
    label: "URGENT",
    value: "URGENT",
  },
  {
    label: "MODERE",
    value: "MODERE",
  },
  {
    label: "RENSEIGNEMENT",
    value: "RENSEIGNEMENT",
  },
];

export const YES_NO_OPTIONS = [
  {
    label: "YES",
    value: "YES",
  },
  {
    label: "NO",
    value: "NO",
  },
];
