import { useEffect, useState } from "react";

interface AddressForm {
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  addressSecondLine: string;
  phone: string;
  city: string;
  stateCode: number;
  zipCode: number;
  [key: string]: string | number;
}

interface FormErrors {
  country: string | null;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  addressSecondLine: string | null;
  phone: string | null;
  city: string | null;
  stateCode: string | null;
  zipCode: number | null;
}

function AddressForm(props: any) {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    addressSecondLine: "",
    phone: "",
    city: "",
    stateCode: 0,
    zipCode: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    country: null,
    firstName: null,
    lastName: null,
    address: null,
    addressSecondLine: null,
    phone: null,
    city: null,
    stateCode: null,
    zipCode: null,
  });

  useEffect(
    () =>
      setAddressForm({
        ...addressForm,
        firstName: props.firstName ? props.firstName : "",
        lastName: props.lastName ? props.lastName : "",
      }),
    []
  );
  const [countries, setCountries] = useState([
    { value: "india", label: "India" },
    { value: "us", label: "US" },
    { value: "australia", label: "Australia" },
  ]);

  const [stateCodes, setStateCodes] = useState([
    { value: "AP", label: "Andhra pradesh" },
    { value: "TS", label: "Telangana" },
    { value: "KT", label: "Karnataka" },
  ]);

  let validateField = (name: string, value: string | number) => {
    let errorMsg = null;
    switch (name) {
      case "country":
        if (!value) errorMsg = "Please select Country.";
        break;
      case "firstName":
        if (!value) errorMsg = "Please enter First Name.";
        break;
      case "lastName":
        if (!value) errorMsg = "Please enter Last Name";
        break;
      case "address":
        if (!value) errorMsg = "Please enter Address";
        break;
      case "addressSecondLine":
        if (!value) errorMsg = "Please enter Address Second Line";
        break;
      case "phone":
        if (!value) errorMsg = "Please enter Mobile.";
        break;
      case "city":
        if (!value) errorMsg = "Please enter City";
        break;
      case "stateCode":
        if (!value) errorMsg = "Please enter State Code";
        break;
      case "zipCode":
        if (!value) errorMsg = "Please enter Zip Code";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  let handleChange = (e: any) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === "zipCode") {
      value = parseInt(value);
    }
    console.log(e);
    setAddressForm({
      ...addressForm,
      [name]: value,
    });
    const errorMessage = validateField(name, value);
    setFormErrors({ ...formErrors, [name]: errorMessage });
  };

  let validateForm = () => {
    let form: AddressForm = { ...addressForm };
    let errorsObj: { [key: string]: string | number } = {};
    Object.keys(form).map((field) => {
      let error = validateField(field, form[field]);
      if (error) {
        errorsObj[field] = error;
      }
    });
    return errorsObj;
  };

  let formSubmit = () => {
    let errorsObj = validateForm();
    if (Object.keys(errorsObj).length !== 0) {
      setFormErrors({ ...formErrors, ...errorsObj });
    } else {
      //add submit logic here.
      console.log(addressForm);
    }
  };

  return (
    <>
      <div className="w-full  mx-auto p-4">
        <div>
          <div className="flex items-center w-full py-3">
            <label className="block w-1/2 text-center" htmlFor="country">
              Country
            </label>
            <div className="w-1/2 text-left">
              <select
                name="country"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.country ? "border-red-500" : ""
                } `}
                onChange={handleChange}
                onBlur={handleChange}
              >
                <option value=""></option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              {formErrors.country && (
                <span className="text-xs text-red-500">
                  {formErrors.country}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center w-full py-3">
            <label className="block w-1/2 text-center" htmlFor="firstName">
              First Name
            </label>
            <div className=" text-left w-1/2">
              <input
                name="firstName"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.firstName ? "border-red-500" : ""
                } `}
                value={addressForm.firstName}
                type="text"
                onChange={handleChange}
                onBlur={handleChange}
              />
              {formErrors.firstName && (
                <span className="text-xs text-red-500">
                  {formErrors.firstName}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center w-full py-3">
            <label className="block w-1/2 text-center" htmlFor="lastName">
              Last Name
            </label>
            <div className="text-left w-1/2">
              <input
                name="lastName"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.lastName ? "border-red-500" : ""
                } `}
                value={addressForm.lastName}
                type="text"
                onChange={handleChange}
                onBlur={handleChange}
              />
              {formErrors.lastName && (
                <span className="text-xs text-red-500">
                  {formErrors.lastName}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center w-full pt-3 pb-1">
            <label className="block w-1/2 text-center" htmlFor="address">
              Address
            </label>
            <div className="text-left w-1/2">
              <textarea
                name="address"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.address ? "border-red-500" : ""
                } `}
                onChange={handleChange}
                onBlur={handleChange}
              ></textarea>
              {formErrors.address && (
                <span className="text-xs text-red-500">
                  {formErrors.address}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center w-full pb-3 pt-1">
            <label
              className="block w-1/2 text-center"
              htmlFor="addressSecondLine"
            >
              Address second line
            </label>
            <div className=" w-1/2">
              <textarea
                name="addressSecondLine"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.addressSecondLine ? "border-red-500" : ""
                } `}
                onChange={handleChange}
                onBlur={handleChange}
              ></textarea>
              <span className="text-xs">
                ex: ATP#, PO Box, Leave Blank if none
              </span>
              {formErrors.addressSecondLine && (
                <span className=" block text-xs text-red-500">
                  {formErrors.addressSecondLine}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center w-full py-3">
            <label className="block w-1/2 text-center" htmlFor="phone">
              Phone#
            </label>
            <div className="text-left w-1/2">
              <input
                name="phone"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.phone ? "border-red-500" : ""
                } `}
                type="text"
                onChange={handleChange}
                onBlur={handleChange}
              />
              {formErrors.phone && (
                <span className="text-xs text-red-500">{formErrors.phone}</span>
              )}
            </div>
          </div>
          <div className="flex items-center w-full py-3">
            <label className="block w-1/2 text-center" htmlFor="city">
              City
            </label>
            <div className="text-left w-1/2">
              <input
                name="city"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.city ? "border-red-500" : ""
                } `}
                type="text"
                onChange={handleChange}
                onBlur={handleChange}
              />
              {formErrors.city && (
                <span className="text-xs text-red-500">{formErrors.city}</span>
              )}
            </div>
          </div>
          <div className="flex items-center w-full py-3">
            <label className="block w-1/2 text-center" htmlFor="stateCode">
              State code
            </label>
            <div className="text-left w-1/2">
              <select
                name="stateCode"
                id="stateCode"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.stateCode ? "border-red-500" : ""
                } `}
                onChange={handleChange}
                onBlur={handleChange}
              >
                <option value=""></option>
                {stateCodes.map((stateCode) => (
                  <option key={stateCode.value} value={stateCode.value}>
                    {stateCode.label}
                  </option>
                ))}
              </select>
              {formErrors.stateCode && (
                <span className="text-xs text-red-500">
                  {formErrors.stateCode}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center  w-full py-3">
            <label className="block w-1/2 text-center" htmlFor="zipCode">
              Zip Code
            </label>
            <div className="text-left w-1/2">
              <input
                name="zipCode"
                className={` border-2 w-full px-2 py-1 border-slate-400 ${
                  formErrors.zipCode ? "border-red-500" : ""
                } `}
                type="text"
                onChange={handleChange}
                onBlur={handleChange}
              />
              {formErrors.zipCode && (
                <span className="text-xs text-red-500">
                  {formErrors.zipCode}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center py-3 w-full">
            <button className="p-2 bg-sky-500" onClick={formSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressForm;