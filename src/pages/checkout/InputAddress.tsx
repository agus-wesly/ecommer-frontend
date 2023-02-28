import { BillingPropsType } from "./Billing";
import { TextField, Box, Typography, useMediaQuery } from "@mui/material";
import { getIn } from "formik";

type PropsType = Omit<
  BillingPropsType,
  "values" | "setFieldValue" | "setPageIndex"
> & {
  type: "billing" | "shipping";
  value:
    | BillingPropsType["values"]["billing"]
    | BillingPropsType["values"]["shipping"];
};

function InputAdress({
  type,
  errors,
  touched,
  handleChange,
  handleBlur,
  value,
}: PropsType) {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const formattedName = (field: string) => `${type}.${field}`;
  const formattedError = (field: string) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );
  const formattedHelperText = (field: string) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <section style={{ marginTop: "24px" }}>
      <Typography mb={1} variant="h3">
        {type} Information
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0,1fr))"
        gap={1}
        sx={{
          "& > div": {
            gridColumn: isNonMobile ? "" : "span 4",
          },
          "& .MuiFormLabel-root": {
            fontFamily: "Cinzel, sans-serif",
          },
        }}
      >
        <TextField
          label="First Name"
          value={value.firstName}
          name={formattedName("firstName")}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("firstName")}
          helperText={formattedHelperText("firstName")}
          sx={{
            gridColumn: "span 2",
          }}
        />

        <TextField
          label="Second Name"
          value={value.lastName}
          name={formattedName("lastName")}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("lastName")}
          helperText={formattedHelperText("lastName")}
          sx={{
            gridColumn: "span 2",
          }}
        />

        <TextField
          label="Country"
          value={value.country}
          name={formattedName("country")}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("country")}
          helperText={formattedHelperText("country")}
          sx={{
            gridColumn: "span 4",
          }}
        />

        <TextField
          label="Street Address"
          value={value.streetAddress}
          name={formattedName("streetAddress")}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("streetAddress")}
          helperText={formattedHelperText("streetAddress")}
          sx={{
            gridColumn: "span 2",
          }}
        />

        <TextField
          label="Street Address 2 (Optional)"
          value={value.streetAddress2}
          name={formattedName("streetAddress2")}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("streetAddress2")}
          helperText={formattedHelperText("streetAddress2")}
          sx={{
            gridColumn: "span 2",
          }}
        />

        <TextField
          label="City"
          name={formattedName("city")}
          value={value.city}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("city")}
          helperText={formattedHelperText("city")}
          sx={{
            gridColumn: "span 2",
          }}
        />

        <TextField
          label="State"
          value={value.state}
          name={formattedName("state")}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("state")}
          helperText={formattedHelperText("state")}
          sx={{
            gridColumn: "span 1",
          }}
        />

        <TextField
          label="Zip Code"
          value={value.zipCode}
          name={formattedName("zipCode")}
          onChange={handleChange}
          onBlur={handleBlur}
          error={formattedError("zipCode")}
          helperText={formattedHelperText("zipCode")}
          sx={{
            gridColumn: "span 1",
          }}
        />
      </Box>
    </section>
  );
}

export default InputAdress;
