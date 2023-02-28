import { TextField, Box, Typography, Button } from "@mui/material";
import { FormikErrors, FormikTouched, FormikHandlers } from "formik";
import { ValueType } from ".";
import { pallete } from "../../theme";

type PropsType = {
  values: ValueType;
  errors: FormikErrors<ValueType>;
  touched: FormikTouched<ValueType>;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

function UserData({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setPageIndex,
}: PropsType) {
  const isError = Boolean(Object.values(errors).length);
  const isTouched = Boolean(Object.values(touched).length);

  const isEmpty = Object.values(values.billing).includes("");
  return (
    <section style={{ marginTop: "24px" }}>
      <Typography mb={1} variant="h3">
        User Information
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Email"
          value={values.email}
          name={"email"}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.email && touched.email)}
          helperText={errors.email}
        />

        <TextField
          label="Phone Number"
          value={values.phoneNumber}
          name={"phoneNumber"}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.phoneNumber && touched.phoneNumber)}
          helperText={errors.phoneNumber}
        />

        <Box display="flex" justifyContent="space-between" gap={3}>
          <Button
            fullWidth
            onClick={() => setPageIndex(0)}
            sx={{
              mt: 3,
              display: "block",
              border: `1px solid ${pallete.primary[500]}`,
              color: pallete.primary[500],
              padding: "12px 32px",
              borderRadius: 0,
            }}
          >
            Back
          </Button>

          <Button
            fullWidth
            disabled={(isError && isTouched) || isEmpty}
            type="submit"
            sx={{
              mt: 3,
              display: "block",
              bgcolor: pallete.primary[500],
              color: pallete.neutral[100],
              padding: "12px 32px",
              borderRadius: 0,
              ":hover": {
                bgcolor: pallete.primary[500],
                color: pallete.neutral[100],
              },
              ":disabled": {
                color: pallete.neutral[100],
                bgcolor: pallete.neutral[800],
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </section>
  );
}

export default UserData;
