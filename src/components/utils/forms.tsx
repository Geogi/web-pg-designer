import { OutlinedTextFieldProps } from "@material-ui/core/TextField";
import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import * as React from "react";

export const Outlined = (props: Omit<OutlinedTextFieldProps, "variant">) => (
  <TextField variant="outlined" margin="normal" autoComplete="off" {...props} />
);

export type Ev = React.ChangeEvent<HTMLInputElement>;

export const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputField: {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(2),
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
    },
  })
);
