import React, { useState } from "react";
import styles from "./HelperRegistration.module.css";
import ScrollToTop from "../../hooks/ScrollToTop.jsx";

const HelperRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    familyPhone: "",
    address: "",
    currentAddress: "",
    aadhaar: "",
    verification: "",
    category: "",
    experience: "",
    bankAccount: "",
    ifsc: "",
    upi: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <>
    <ScrollToTop/>
    <main>
      <div className={styles["container"]}>
        <form className={styles["registration-form"]} onSubmit={handleSubmit}>
          <h2>Register as a Worker</h2>

          {/* Personal Information */}
          <div className={styles["form-section"]}>
            <h3>Personal Information</h3>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option className={styles["option"]} value="">Select Gender</option>
              <option className={styles["option"]} value="male">Male</option>
              <option className={styles["option"]} value="female">Female</option>
              <option className={styles["option"]} value="other">Other</option>
            </select>

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="familyPhone">Family Phone Number</label>
            <input
              type="tel"
              id="familyPhone"
              name="familyPhone"
              placeholder="Enter your family phone number"
              value={formData.familyPhone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address Information */}
          <div className={styles["form-section"]}>
            <h3>Address Information</h3>
            <label htmlFor="address">Permanent Address</label>
            <textarea
              id="address"
              name="address"
              rows="4"
              placeholder="Enter your permanent address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>

            <label htmlFor="currentAddress">Current Address (optional)</label>
            <textarea
              id="currentAddress"
              name="currentAddress"
              rows="4"
              placeholder="Enter your current address"
              value={formData.currentAddress}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Identity Verification */}
          <div className={styles["form-section"]}>
            <h3>Identity Verification</h3>
            <label htmlFor="aadhaar">Aadhaar Number</label>
            <input
              type="text"
              id="aadhaar"
              name="aadhaar"
              placeholder="Enter your Aadhaar number"
              value={formData.aadhaar}
              onChange={handleChange}
              required
            />

            <label htmlFor="verification">Police Verification Status</label>
            <select
              id="verification"
              name="verification"
              value={formData.verification}
              onChange={handleChange}
              required
            >
              <option className={styles["option"]} value="">Select Status</option>
              <option className={styles["option"]} value="verified">Verified</option>
              <option className={styles["option"]} value="pending">Pending</option>
            </select>
          </div>

          {/* Employment Details */}
          <div className={styles["form-section"]}>
            <h3>Employment Details</h3>
            <label htmlFor="category">Work Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option className={styles["option"]} value="">Select Category</option>
              <option className={styles["option"]} value="elder_care">Elder Care</option>
              <option className={styles["option"]} value="babysitter">Babysitter</option>
              <option className={styles["option"]} value="maid">Maid</option>
              <option className={styles["option"]} value="electrician">Electrician</option>
              <option className={styles["option"]} value="plumber">Plumber</option>
            </select>

            <label htmlFor="experience">Years of Experience</label>
            <input
              type="number"
              id="experience"
              name="experience"
              min="0"
              placeholder="Enter your years of experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bank Details */}
          {/* <div className={styles["form-section"]}>
            <h3>Banking Information</h3>
            <label htmlFor="bankAccount">Bank Account Number</label>
            <input
              type="text"
              id="bankAccount"
              name="bankAccount"
              placeholder="Enter your bank account number"
              value={formData.bankAccount}
              onChange={handleChange}
              required
            />

            <label htmlFor="ifsc">IFSC Code</label>
            <input
              type="text"
              id="ifsc"
              name="ifsc"
              placeholder="Enter IFSC code"
              value={formData.ifsc}
              onChange={handleChange}
              required
            />

            <label htmlFor="upi">UPI ID (optional)</label>
            <input
              type="text"
              id="upi"
              name="upi"
              placeholder="Enter your UPI ID"
              value={formData.upi}
              onChange={handleChange}
            />
          </div> */}

          {/* Emergency Contact */}
          <div className={styles["form-section"]}>
            <h3>Emergency Contact</h3>
            <label htmlFor="emergencyContact">Emergency Contact Name</label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              placeholder="Enter emergency contact name"
              value={formData.emergencyContact}
              onChange={handleChange}
              required
            />

            <label htmlFor="emergencyPhone">Emergency Contact Number</label>
            <input
              type="tel"
              id="emergencyPhone"
              name="emergencyPhone"
              placeholder="Enter emergency contact number"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button className={styles["button"]} type="submit">Register Now</button>
        </form>
      </div>
    </main> </>
  );
};

export default HelperRegistration;
