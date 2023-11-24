import Instructions from "./Instructions";
import Products from "./products";
import AddressForm from "./Address-form";
import { EmployeePerks } from "../types/app-types";
import { useEffect, useState } from "react";
import { get } from "../axios";

function Container(props: EmployeePerks) {
  const [pointsPerMonth, setMonthlyPoints] = useState(0);
  const [monthSelected, setMonthSelected] = useState("january");
  const [seat, setSeat] = useState(0);
  const [shippingLocation, setShippingLocation] = useState("none");
  const [products, setProducts] = useState({});
  const [address, setAddress] = useState({});

  const currentDate = new Date().toLocaleDateString();
  const { title, logo, user } = props;

  const handleMonthSelection = (event) => {
    event.stopPropagation();
    setMonthSelected(event.target.value);
    setMonthlyPoints(user.perks[event.target.value].availablePoints);
  };

  useEffect(() => {
    setMonthlyPoints(user.perks[monthSelected].availablePoints);
    get("products/getAllProducts").then((resp) => {
      setProducts(resp.data.productsCategories as any);
    });
  }, []);

  const updateProductList = (updatedProduct, category) => {
    setProducts({ ...products, category: updatedProduct });
  };
  const submitOrderDetails = (event) => {
    event.preventDefault();
    const inputObject = {};
  };
  return (
    <div className="container mx-auto  border">
      <div className="flex flex-col items-center mt-8">
        <div className="text-center">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
          <p className="text-lg font-bold text-blue-500">{title}</p>
        </div>

        <div className="mr-2 text-sm text-gray-600 self-end">{currentDate}</div>
      </div>
      <div className="general-info text-center border bg-gray-100">
        {" "}
        GENERAL INFORMATION
      </div>

      <div className="container mx-auto border box-border mr-2">
        <div className="w-full bg-gray-100 column-2">
          <div className="row flex flex-row w-full my-1 p-4">
            <div className="flex flex-row w-1/2 box-border pr-3.5">
              <label
                htmlFor="month"
                className="text-sm font-medium text-gray-600 w-1/2 text-right block pr-1"
              >
                Month :
              </label>
              <div className="flex flex-col w-1/2">
                <select
                  id="month"
                  name="month"
                  defaultValue={"january"}
                  className="border rounded-md mx-1"
                  value={monthSelected}
                  onChange={handleMonthSelection}
                >
                  {Object.keys(user.perks).map((key) => {
                    return (
                      <option value={key} key={key}>
                        {key}
                      </option>
                    );
                  })}
                </select>
                <p className="text-sm text-gray-500 mt-1 mx-1">
                  Select a month to see available points
                </p>
              </div>
            </div>
            <div className="flex flex-row w-1/2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-600 w-2/5 text-right"
              >
                Full Name :
              </label>
              <div className="flex flex-col ml-2">
                <p id="fullName">
                  {user.firstName} {user.lastName} - {user.role}
                </p>
                <div className="flex flex-row justify-center items-center">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    className="form-checkbox h-3 w-3 text-indigo-600"
                  />
                  <label
                    htmlFor="checkbox"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Check for Admin override
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className=" row w-full my-1 flex flex-row">
            <div className="flex flex-row justify-center items-center w-1/2">
              <p className="text-sm font-medium text-right w-1/2">
                My EPP Points :
              </p>
              <p className="text-xs w-1/2 ml-1">
                <span className="font-bold px-1">{pointsPerMonth}</span> /{" "}
                <span>{user.pointsPerMonth}</span>
              </p>
            </div>

            <div className="border w-1/2 box-border">
              <div className="flex flex-row w-full pr-4">
                <label
                  htmlFor="location"
                  className="text-sm font-medium text-gray-600 mb-1 w-2/5 text-right pe-0.5"
                >
                  Location:
                </label>
                <div className="flex flex-col">
                  <select
                    className="border rounded-md w-full text-sm ml-1"
                    id="location"
                    onChange={(e) => setShippingLocation(e.target.value)}
                  >
                    <option value="none"> </option>
                    <option value="ship-to-home"> SHIP TO HOME</option>
                  </select>
                  <p className="text-xs ml-1 max-w-xs grow">
                    All Employees, please choose SHIP TO HOME option
                    <br />
                    Choose US or Canada from country dropdown menu
                    <br /> and enter shipping address
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row flex flex-row w-full my-1">
            <div className="pt-2 border min-h-fit w-1/2">
              {shippingLocation !== "none" ? (
                <AddressForm
                  firstName={user.firstName}
                  lastName={user.lastName}
                  setAddress={setAddress}
                />
              ) : (
                <div className="h-80"></div>
              )}
            </div>
            <div className="pt-2 border w-1/2 align-top">
              {shippingLocation === "none" && (
                <div className="flex flex-row mb-1 pr-7 ">
                  <label
                    htmlFor="seat#"
                    className="text-sm w-2/5 mb-1 text-right pe-0.5"
                  >
                    {" "}
                    Seat #:
                  </label>
                  <input
                    type="text"
                    name="seat"
                    id="seat#"
                    className="border rounded-md bg-white ml-1 w-2/5"
                    onChange={(e) => setSeat(Number(e.target.value))}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Instructions />
      <Products products={products} setProducts={updateProductList} />
      <button
        className="w-full bg-white font-bold italic text-xl cursor-pointer"
        onClick={submitOrderDetails}
      >
        SUBMIT YOUR ORDER
      </button>
    </div>
  );
}

export default Container;
