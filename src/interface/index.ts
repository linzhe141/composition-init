export interface IMenuItem {
  name: string;
  label: string;
  index: string;
  level?: number;
  redirect?: string;
  meta?:{
    headActive?: string
  },
  children: IMenuItem[]
}

export interface IResDataType {
  success: boolean;
  data: any;
  token?: string;
}

export interface ILoginForm {
  user: string;
  password: string;
}

export type FilterType = 'input' | 'select' | 'datetimerange' | 'daterange';

export interface ISelectOptions {
  label: string;
  value: string | number;
}

export interface IFilterItem{
  label: string;
  name: string;
  type: FilterType;
  placeholder: string;
  options?: Array<ISelectOptions>;
}

export interface BaseTableFormValue {
  user: string;
  type: string | number;
  time: Array<Date>;
}

export interface IFilterConfig<T> {
  items: Array<IFilterItem>;
  formValue: T;
  resetHandler: () => void;
}

export type TableColumn = {
  prop: string;
  label: string;
}

export interface ITableConfig{
  url: string;
  columns: Array<TableColumn>;
}

// 具体页面数据接口
export interface IBaseTable {
  id: number;
  date: string;
  name: string;
  address: string;
}