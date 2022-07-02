type StatusType = {
  NEW: string;
  DOING: string;
  DONE: string;
};

export const STATUS: StatusType = {
  NEW: 'New',
  DOING: 'Doing',
  DONE: 'Done',
};

type RouteType = {
  All: string;
  NEW: string;
  DOING: string;
  DONE: string;
  ADD_NEW: string;
  DETAIL: string;
  DETAIL_TASK: string;
  NOT_FOUND: string;
};

export const ROUTE: RouteType = {
  All: '/',
  NEW: '/new',
  DOING: '/doing',
  DONE: '/done',
  ADD_NEW: '/add-new',
  DETAIL: '/detail',
  DETAIL_TASK: '/detail/:idTask',
  NOT_FOUND: '*',
};

interface SideBarItem {
  url: string;
  title: string;
}

export const SIDEBAR_ITEMS: SideBarItem[] = [
  {
    url: ROUTE.All,
    title: 'All Task',
  },
  {
    url: ROUTE.NEW,
    title: 'New Task',
  },
  {
    url: ROUTE.DOING,
    title: 'Doing Task',
  },
  {
    url: ROUTE.DONE,
    title: 'Done Task',
  },
];

export const LIST_TO_DO_KEY: string = 'l_t_d_k';

export const ITEM_PER_PAGE: number = 4;

interface AlertType {
  NONE: number;
  SUCCESS: number;
  ERROR: number;
  MINIMUM_TIME_MS: number;
  MAXIMUM_TIME_MS: number;
  DEFAULT_TIME: number;
}

export const ALERT: AlertType = {
  NONE: 0,
  SUCCESS: 1,
  ERROR: 2,
  MINIMUM_TIME_MS: 1000,
  MAXIMUM_TIME_MS: 10000,
  DEFAULT_TIME: 3,
};

type FeaturesType = {
  ADD_NEW: string;
  EDIT_TASK: string;
  DELETE_TASK: string;
};

export const FEATURES: FeaturesType = {
  ADD_NEW: 'addNew',
  EDIT_TASK: 'editTask',
  DELETE_TASK: 'deleteTask',
};
