import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./ApplicantForm.css";
import Select from "react-select";

const provinces = ["AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK"];
const options = provinces.map((province) => ({
  value: province,
  label: province,
}));

const maritalStatuses = [
  { label: "Single", value: "Single" },
  { label: "Married", value: "Married" },
  { label: "Divorced", value: "Divorced" },
  { label: "Widowed", value: "Widowed" },
];

const ApplicantForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      maritalStatus: "",
      streetAddress: "",
      city: "",
      province: "",
      postalCode: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      isIndigenous: false,
      nationality: "",
    },
  });

  const [formData, setFormData] = useState(null);

  const isIndigenous = watch("isIndigenous");

  const onSubmit = (data) => {
    setFormData(data);
    reset({
      name: "",
      maritalStatus: "",
      streetAddress: "",
      city: "",
      province: "",
      postalCode: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      isIndigenous: false,
      nationality: "",
    });
  };

  return (
    <div className="w-3/4 md:w-3/5 mx-auto m-4 p-4 bg-white shadow-md rounded">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h1 className="text-2xl font-bold">Applicant Information</h1>
        <div>
          <label className="block text-sm font-medium text-left">
            Applicant Name
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Applicant name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="text-xs mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-left">
            Marital Status
          </label>
          <div className="mt-1 grid grid-cols-2 gap-2 md:grid-cols-4">
            {maritalStatuses.map((status) => (
              <div key={status.value} className="flex items-center">
                <Controller
                  name="maritalStatus"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="radio"
                      value={status.value}
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      checked={field.value === status.value}
                    />
                  )}
                />
                <label className="ml-2 block text-xs font-medium text-gray-700">
                  {status.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-left">Address</label>
          <Controller
            name="streetAddress"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Street Address"
                className="w-full text-xs mt-1 p-2 block border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
          <div className="grid grid-cols-6 gap-1 mt-2">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-left">
                City
              </label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="City"
                    className="text-xs mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                )}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-left">
                Province
              </label>
              <Controller
                name="province"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={options}
                    placeholder="Select"
                    className="text-xs mt-1"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        minHeight: "auto",
                        height: "2.1rem",
                        borderRadius: "0.375rem",
                        borderWidth: "0.1em",
                        borderColor: state.isFocused ? "#6366f1" : "#f9fafb",
                        boxShadow: state.isFocused
                          ? "0 0 0 1px #6366f1"
                          : "none",
                        "&:hover": {
                          borderColor: state.isFocused ? "#6366f1" : "#f9fafb",
                        },
                      }),
                      indicatorSeparator: (base) => ({
                        display: "none",
                      }),
                      menu: (base) => ({
                        ...base,
                        zIndex: 9999,
                      }),
                      option: (base, state) => ({
                        ...base,
                      }),
                    }}
                  />
                )}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-left">
                Postal Code
              </label>
              <Controller
                name="postalCode"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Postal Code"
                    className="text-xs mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-left">
            Date of Birth
          </label>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="text-xs mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-left">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="mt-1 text-xs p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            )}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-left">
            Phone Number
          </label>
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="tel"
                  placeholder="Phone Number"
                  className="text-xs mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => {
                    const regex = /^[0-9]*$/;
                    if (regex.test(e.target.value)) {
                      field.onChange(e);
                    }
                  }}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="flex items-center">
          <Controller
            name="isIndigenous"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={field.value}
              />
            )}
          />
          <label className="ml-2 block text-sm font-medium">
            I identify as indigenous
          </label>
        </div>
        {isIndigenous && (
          <div>
            <label className="block text-sm font-medium text-left">
              Nationality
            </label>
            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      {formData && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-bold">Form Data</h2>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(
              { ...formData, province: formData.province.value },
              null,
              2
            )}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApplicantForm;
