export const STATUS = {
  NEW: "New",
  DOING: "Doing",
  DONE: "Done",
};

export const ROUTE = {
  All: "/",
  NEW: "/new",
  DOING: "/doing",
  DONE: "/done",
  ADD_NEW: "/add-new",
  DETAIL: "/detail",
  DETAIL_TASK: "/detail/:idTask",
  NOT_FOUND: "*",
};

export const SIDEBAR_ITEMS = [
  {
    url: "/",
    title: "All Task",
  },
  {
    url: "/new",
    title: "New Task",
  },
  {
    url: "/doing",
    title: "Doing Task",
  },
  {
    url: "/done",
    title: "Done Task",
  },
];

export const LIST_TO_DO_KEY = "l_t_d_k";
