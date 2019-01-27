import React from "react";
import Downshift from "downshift";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import deburr from "lodash/deburr";
import {
  Typography,
  TextField,
  Paper,
  MenuItem,
  ListItemText
} from "@material-ui/core";
import styles from "../components/theme";

const renderInput = inputProps => {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRootAutocomplete,
          input: classnames(classes.inputAutocomplete, classes.glabInputField)
        },
        ...InputProps
      }}
      {...other}
    />
  );
};

const getSuggestions = (value, suggestions) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggestions.filter(
      s => s.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    );
};

const renderSuggestion = ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem,
  classes
}) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || "").indexOf(suggestion.label) > -1;
  return (
    <MenuItem
      {...itemProps}
      key={suggestion.id || suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      <ListItemText
        primary={<div className={classes.listTextName}>{suggestion.label}</div>}
        secondary={
          suggestion.caption && (
            <Typography
              noWrap
              secondary="true"
              className={classes.listTextSecondaryDesc}
            >
              {suggestion.caption}
            </Typography>
          )
        }
      />
    </MenuItem>
  );
};

class Autocomplete extends React.Component {
  render() {
    const {
      onChange,
      onInputValueChange,
      value,
      onSelect,
      classes,
      placeholder,
      label,
      error,
      helperText,
      options
    } = this.props;
    return (
      <Downshift
        onChange={onChange}
        onSelect={onSelect}
        initialInputValue={value}
        onInputValueChange={onInputValueChange}
        id="downshift-simple"
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
          clearSelection,
          clearItems
        }) => (
            <div className={classes.containerAutocomplete}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder,
                  onChange: e => {
                    if (!e.target.value) {
                      clearSelection();
                      clearItems();
                    }
                  }
                }),
                label,
                error,
                helperText
              })}
              <div {...getMenuProps()}>
                {isOpen && options && (
                  <Paper className={classes.glabsSuggestion}>
                    {getSuggestions(inputValue, options).map(
                      (suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: suggestion.label }),
                          highlightedIndex,
                          selectedItem,
                          classes
                        })
                    )}
                  </Paper>
                )}
              </div>
            </div>
          )}
      </Downshift>
    );
  }
}
export default withStyles(styles)(Autocomplete);
