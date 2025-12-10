import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./CheckoutForm.module.scss";
import { CheckoutFormData } from "./src/types";
//import { formatDateToDDMMYYYY } from "@workspace/shared-utils";


export default function CheckoutForm() {

  const [formData, setFormData] = React.useState<CheckoutFormData>({
    fullName: "",
    mobileNumber: "",
    houseNo: "",
    street: "",
    pincode: "",
    state: "",
    country: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  React.useEffect(() => {
    console.log("Form JSON:", formData);
  }, [formData]);

  return (
    <Box component="form" noValidate autoComplete="off" className={styles.formWrapper}>
      <div className={styles.fullRow}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.fullRow}>
        <TextField
          fullWidth
          label="Mobile Number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
      </div>

      <div className={styles.fullRow}>
        <TextField
          fullWidth
          label="Flat / House No."
          name="houseNo"
          value={formData.houseNo}
          onChange={handleChange}
        />
      </div>

      <div className={styles.fullRow}>
        <TextField
          fullWidth
          label="Area / Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </div>

      <div className={styles.fullRow}>
        <TextField
          fullWidth
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
      </div>

      <div className={styles.fullRow}>
        <TextField
          fullWidth
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>

      <div className={styles.fullRow}>
        <TextField
          fullWidth
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
