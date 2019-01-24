export const setError = globalError => ({
  type: "SET_ERROR",
  globalError
});

export const resetError = () => ({
  type: "RESET_ERROR"
});

export const showBackTo = backTo => ({
  type: "SHOW_BACK_TO",
  backTo
});

export const setAdminPageTitle = adminPageTitle => ({
  type: "SET_ADMIN_PAGE_TITLE",
  adminPageTitle
});

export const setTitleByLocation = location => ({
  type: "SET_TITLE_BY_LOCATION",
  location
});

export const setScrolledPosition = lastPosition => ({
  type: "SET_SCROLLED_POSITION",
  lastPosition
});

export const setSearchedText = searchedText => ({
  type: "SET_SEARCHED_TEXT",
  searchedText
});

export const refetchRc = refetch => ({
  type: "REFETCH_RC",
  refetch
});

export const resetRefetchAdmin = () => ({
  type: "RESET_REFETCH_ADMIN"
});

export const resetRefetchMenu = () => ({
  type: "RESET_REFETCH_MENU"
});

export const refetchMenu = () => ({
  type: "REFETCH_MENU"
});

export const openAndSetDialog = data => ({
  type: "OPEN_AND_SET_DIALOG",
  data
});

export const closeAndResetDialog = () => ({
  type: "CLOSE_AND_RESET_DIALOG"
});

export const openAndSetMoreVertOptions = data => ({
  type: "OPEN_AND_SET_MORE_VERT_OPTIONS",
  data
});

export const closeAndResetMoreVertOptions = () => ({
  type: "CLOSE_AND_RESET_MORE_VERT_OPTIONS"
});

export const openAndSetSnackbar = (variant, message) => ({
  type: "OPEN_AND_SET_SNACKBAR",
  variant,
  message
});

export const closeAndResetSnackbar = () => ({
  type: "CLOSE_AND_RESET_SNACKBAR"
});

export const setDrawer = openDrawer => ({
  type: "OPEN_LOADER",
  openDrawer
});

export const openLoader = () => ({
  type: "OPEN_LOADER"
});

export const closeLoader = () => ({
  type: "CLOSE_LOADER"
});

export const setMedia = (mediaSrc, mediaType) => ({
  type: "SET_MEDIA",
  mediaSrc,
  mediaType
});

export const resetMedia = () => ({
  type: "RESET_MEDIA"
});

export const setOpeningHours = openingHours => ({
  type: "SET_OPENING_HOURS",
  openingHours
});

export const setAdditionalNote = additionalNote => ({
  type: "SET_ADDITIONAL_NOTE",
  additionalNote
});

export const resetOpeningHours = () => ({
  type: "RESET_OPENING_HOURS"
});

export const setAvailableOptions = availableOptions => ({
  type: "SET_AVAILABLE_OPTIONS",
  availableOptions
});
export const resetAutocomplete = () => ({
  type: "RESET_AUTOCOMPETE"
});

export const setSelectedOptions = selectedOptions => ({
  type: "SET_SELECTED_OPTIONS",
  selectedOptions
});
export const setErrorAutocomplete = (error, helperText) => ({
  type: "SET_ERROR_AUTOCOMPLETE",
  error,
  helperText
});
