import { ValueType } from ".";
import {
  FormikErrors,
  FormikTouched,
  FormikHandlers,
  FormikHelpers,
} from "formik";
import Box from "@mui/material/Box";
import InputAddress from "./InputAddress";
import { Checkbox, FormControlLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { pallete } from "../../theme";

export type BillingPropsType = {
  values: ValueType;
  errors: FormikErrors<ValueType>;
  touched: FormikTouched<ValueType>;
  handleChange: FormikHandlers["handleChange"];
  handleBlur: FormikHandlers["handleBlur"];
  handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => void;
  setFieldValue: FormikHelpers<ValueType>["setFieldValue"];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

function Billing({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  setPageIndex,
}: BillingPropsType) {
  // Handle Next Button
  const handleBtnClick = () => {
    setPageIndex(1);
  };

  const isError = Boolean(Object.values(errors).length);
  const isTouched = Boolean(Object.values(touched).length);

  const isEmpty = Object.values(values.billing).includes("");

  return (
    <Box>
      <InputAddress
        type="billing"
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        value={values.billing}
      />
      <FormControlLabel
        label="Same as shipping"
        control={<Checkbox checked={values.shipping.sameAsBilling} />}
        onChange={() =>
          setFieldValue(
            "shipping.sameAsBilling",
            !values.shipping.sameAsBilling
          )
        }
      />

      {!values.shipping.sameAsBilling && (
        <InputAddress
          type="shipping"
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          value={values.shipping}
        />
      )}

      {/* Next Button */}
      <Button
        fullWidth
        onClick={handleBtnClick}
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
        disabled={(isError && isTouched) || isEmpty}
      >
        Next
      </Button>
    </Box>
  );
}

export default Billing;
