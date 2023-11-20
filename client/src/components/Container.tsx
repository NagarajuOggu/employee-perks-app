import Instructions from "./Instructions";
import Products from "./products";
import AddressForm from "./Address-form";
import { EmployeePerks } from "../types/app-types";
import { useEffect, useState } from "react";

function Container(props: EmployeePerks) {
  const [pointsPerMonth, setMonthlyPoints] = useState(0);
  const [monthSelected, setMonthSelected] = useState("january");
  const [seat, setSeat] = useState(0);
  const [shippingLocation, setShippingLocation] = useState("none");

  const currentDate = new Date().toLocaleDateString();
  const { title, logo, user } = props;

  const handleMonthSelection = (event) => {
    event.stopPropagation();
    setMonthSelected(event.target.value);
    setMonthlyPoints(user.perks[event.target.value].availablePoints);
  };

  useEffect(() => {
    setMonthlyPoints(user.perks[monthSelected].availablePoints);
  }, []);

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

      <div className="perks-container mx-auto">
        <table className="w-full border bg-gray-100">
          <tbody>
            <tr>
              <td className="border w-1/2 box-border">
                <div className="flex flex-row justify-end m-2 ">
                  <label
                    htmlFor="month"
                    className="text-sm font-medium text-gray-600"
                  >
                    Month :
                  </label>
                  <div className="flex flex-col">
                    <select
                      id="month"
                      name="month"
                      defaultValue={"january"}
                      className="border rounded-md w-full ml-1"
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
                    <p className="text-sm text-gray-500 mt-1 text-right mr-auto ml-1">
                      Select a month to see available points
                    </p>
                  </div>
                </div>
              </td>

              <td className="border w-1/2">
                <div className="flex flex-row justify-center">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-600"
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
              </td>
            </tr>
            <tr>
              <td className="border w-1/2">
                <div className="flex flex-row justify-center items-center">
                  <p className="text-sm font-medium text-right w-1/2">
                    My EPP Points:
                  </p>
                  <p className="text-xs w-1/2 ml-1">
                    <span className="font-bold px-1">{pointsPerMonth}</span> /{" "}
                    <span>{user.pointsPerMonth}</span>
                  </p>
                </div>
              </td>
              <td className="border w-1/2 box-border">
                <div className="flex flex-row w-full justify-center">
                  <label
                    htmlFor="location"
                    className="text-sm font-medium text-gray-600 mb-1"
                  >
                    Location:
                  </label>
                  <div className="flex flex-col ml-1">
                    <select
                      className="border rounded-md w-3/4 text-sm ml-1"
                      id="location"
                      onChange={(e) => setShippingLocation(e.target.value)}
                    >
                      <option value="none"> </option>
                      <option value="ship-to-home"> SHIP TO HOME</option>
                    </select>
                    <p className="text-xs ml-1 max-w-xs grow">
                      All Employees, please choose SHIP TO HOME option
                      <br />
                      Choose US or Canada from contry dropdown menu
                      <br /> and enter shipping address
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="pt-2 border min-h-fit w-1/2">
                {shippingLocation !== "none" ? (
                  <AddressForm
                    firstName={user.firstName}
                    lastName={user.lastName}
                  />
                ) : (
                  <div className="h-80"></div>
                )}
              </td>
              <td className="pt-2 border w-1/2 align-top">
                <div className="flex flex-row justify-center mb-1">
                  <label htmlFor="seat#" className="text-sm  mb-1">
                    {" "}
                    Seat #:
                  </label>
                  <input
                    type="text"
                    name="seat"
                    id="seat#"
                    className="border bg-white ml-1 w-1/2"
                    onChange={(e) => setSeat(Number(e.target.value))}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Instructions />
      <Products />
    </div>
  );
}

export default Container;
