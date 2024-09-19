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
    value: 4,
  },
  {
    label: "TRES URGENT",
    value: 3,
  },
  {
    label: "URGENT",
    value: 2,
  },
  {
    label: "MODERE",
    value: 1,
  },
  {
    label: "RENSEIGNEMENT",
    value: 5,
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
