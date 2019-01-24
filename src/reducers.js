import { combineReducers } from "redux";

const initialState = {
  adminPageTitle: "Restaurants",
  lastPosition: null,
  searchedText: "",
  // showSearchIcon: true,
  rcRefetch: false,
  adminRefetch: false,
  restoRefetch: 0,
  menuRefetch: false,
  enableSearch: true,
  dialogState: {
    opened: false,
    data: null
  },
  backTo: false,
  moreVertState: {
    opened: false,
    data: null
  },
  snackbarState: {
    opened: false,
    message: "",
    variant: "success"
  },
  showloader: false,
  mediaSrc: null,
  mediaType: null,
  openDrawer: true,
  openingHours: [
    {
      id: "monday",
      status: "open",
      services: [
        {
          service: 1,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "09:00:00",
              init: "09:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "12:00:00",
              init: "12:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        },
        {
          service: 2,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "13:00:00",
              init: "13:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "17:00:00",
              init: "17:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        }
      ]
    },
    {
      id: "tuesday",
      status: "open",
      services: [
        {
          service: 1,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "09:00:00",
              init: "09:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "12:00:00",
              init: "12:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        },
        {
          service: 2,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "13:00:00",
              init: "13:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "17:00:00",
              init: "17:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        }
      ]
    },
    {
      id: "wednesday",
      status: "open",
      services: [
        {
          service: 1,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "09:00:00",
              init: "09:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "12:00:00",
              init: "12:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        },
        {
          service: 2,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "13:00:00",
              init: "13:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "17:00:00",
              init: "17:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        }
      ]
    },
    {
      id: "thursday",
      status: "open",
      services: [
        {
          service: 1,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "09:00:00",
              init: "09:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "12:00:00",
              init: "12:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        },
        {
          service: 2,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "13:00:00",
              init: "13:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "17:00:00",
              init: "17:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        }
      ]
    },
    {
      id: "friday",
      status: "open",
      services: [
        {
          service: 1,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "09:00:00",
              init: "09:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "12:00:00",
              init: "12:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        },
        {
          service: 2,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "13:00:00",
              init: "13:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "17:00:00",
              init: "17:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        }
      ]
    },
    {
      id: "saturday",
      status: "open",
      services: [
        {
          service: 1,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "09:00:00",
              init: "09:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "12:00:00",
              init: "12:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        },
        {
          service: 2,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "13:00:00",
              init: "13:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "17:00:00",
              init: "17:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        }
      ]
    },
    {
      id: "sunday",
      status: "open",
      services: [
        {
          service: 1,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "09:00:00",
              init: "09:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "12:00:00",
              init: "12:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        },
        {
          service: 2,
          times: [
            {
              id: "startTime",
              disabled: false,
              value: "13:00:00",
              init: "13:00:00"
            },
            {
              id: "endTime",
              disabled: false,
              value: "17:00:00",
              init: "17:00:00"
            }
          ],
          lastOrderNote: "",
          diffHours: null,
          diffMinutes: null,
          hourUnit: null,
          minuteUnit: null,
          error: false,
          helperText: null
        }
      ]
    }
  ],
  additionalNote: "",
  availableOptions: [],
  selectedOptions: [],
  errorAutocomplete: false,
  helperAutocomplete: null,
  globalError: null
};

const appetyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, globalError: action.globalError };

    case "RESET_ERROR":
      return { ...state, globalError: null };

    case "SHOW_BACK_TO":
      return { ...state, backTo: action.backTo };

    case "SET_ADMIN_PAGE_TITLE":
      return { ...state, adminPageTitle: action.adminPageTitle };

    case "SET_TITLE_BY_LOCATION": {
      let title;
      if (action.location === "/promos") title = "Promos";
      else if (action.location === "/new_promo") title = "New Promo";
      else if (action.location === "/rest_categories")
        title = "Restaurant Categories";
      else if (action.location === "/menu_categories")
        title = "Menu Categories";
      else if (action.location === "/super_admins") title = "Super Admin";
      else if (
        action.location === "/restaurants" ||
        action.location === "/restaurants/" ||
        action.location === "/"
      )
        title = "Restaurants";
      return { ...state, adminPageTitle: title };
    }

    case "SET_SCROLLED_POSITION":
      return { ...state, lastPosition: action.lastPosition };

    case "SET_SEARCHED_TEXT":
      return { ...state, searchedText: action.searchedText };

    case "REFETCH_RC":
      return { ...state, rcRefetch: action.refetch };

    case "RESET_REFETCH_ADMIN":
      return { ...state, adminRefetch: false };

    case "RESET_REFETCH_RESTO":
      return { ...state, restoRefetch: 0 };

    case "REFETCH_RESTO":
      return { ...state, restoRefetch: action.refetch };

    case "RESET_REFETCH_MENU":
      return { ...state, menuRefetch: false };

    case "REFETCH_MENU":
      return { ...state, menuRefetch: true };

    case "OPEN_AND_SET_DIALOG":
      return {
        ...state,
        dialogState: {
          opened: true,
          data: action.data
        }
      };

    case "CLOSE_AND_RESET_DIALOG":
      return {
        ...state,
        dialogState: {
          opened: false,
          data: {
            title: "",
            content: null,
            actionButton: null
          }
        }
      };

    case "OPEN_AND_SET_SNACKBAR":
      return {
        ...state,
        snackbarState: {
          opened: true,
          message: action.message,
          variant: action.variant
        }
      };

    case "CLOSE_AND_RESET_SNACKBAR":
      return {
        ...state,
        snackbarState: {
          opened: false,
          message: "",
          variant: "success"
        }
      };

    case "OPEN_AND_SET_MORE_VERT_OPTIONS":
      return {
        ...state,
        moreVertState: {
          opened: true,
          data: action.data
        }
      };

    case "CLOSE_AND_RESET_MORE_VERT_OPTIONS":
      return {
        ...state,
        moreVertState: {
          opened: false,
          data: null
        }
      };
    case "SET_DRAWER":
      return { ...state, openDrawer: action.openDrawer };

    case "OPEN_LOADER":
      return { ...state, showloader: true };

    case "CLOSE_LOADER":
      return { ...state, showloader: false };

    case "SET_MEDIA":
      return {
        ...state,
        mediaSrc: action.mediaSrc,
        mediaType: action.mediaType
      };

    case "RESET_MEDIA":
      return { ...state, mediaSrc: null, mediaType: null };

    case "SET_OPENING_HOURS":
      return { ...state, openingHours: action.openingHours };

    case "SET_ADDITIONAL_NOTE":
      return { ...state, additionalNote: action.additionalNote };

    case "RESET_OPENING_HOURS":
      return {
        ...state,
        openingHours: initialState.openingHours,
        additionalNote: ""
      };

    case "SET_AVAILABLE_OPTIONS":
      return { ...state, availableOptions: action.availableOptions };

    case "SET_SELECTED_OPTIONS":
      return { ...state, selectedOptions: action.selectedOptions };

    case "RESET_AUTOCOMPETE":
      return {
        ...state,
        availableOptions: [],
        selectedOptions: [],
        errorAutocomplete: false,
        helperAutocomplete: null
      };

    case "SET_ERROR_AUTOCOMPLETE":
      return {
        ...state,
        errorAutocomplete: action.error,
        helperAutocomplete: action.helperText
      };

    default:
      return state;
  }
};

export default combineReducers({ appetyReducer });
