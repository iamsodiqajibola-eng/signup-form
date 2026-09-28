import { useState } from "react";
import errorIcon from "../assets/icon-error.svg";

function SignupForm() {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: formData.firstName ? "" : "First Name cannot be empty",
      lastName: formData.lastName ? "" : "Last Name cannot be empty",
      email: formData.email ? "" : "Looks like this is not an email",
      password: formData.password ? "" : "Password cannot be empty",
    };

    setErrors(newErrors);

    if (
      !newErrors.firstName &&
      !newErrors.lastName &&
      !newErrors.email &&
      !newErrors.password
    ) {
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  };
  return (
    <section className="w-full max-w-md">
      <div className="mb-4 rounded-lg bg-purple-600 p-4 text-center text-white shadow-lg">
        <p className="">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-white p-6 shadow-lg flex flex-col gap-4"
      >
        {submitted && (
          <p className="text-center text-green-700 font-semibold">
            Form submitted successfully
          </p>
        )}
        <div className="relative">
          <input
            type="text"
            placeholder="First Name"
            className={`w-full rounded-md border px-4 py-3  ${
              errors.firstName
                ? "border-red-400 text-red-500"
                : "border-gray-300"
            }`}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          {errors.firstName && (
            <img
              src={errorIcon}
              alt="Error"
              className="absolute right-4 top-1/3 h-5 w-5 -translate-y-1/2"
            />
          )}
          {errors.firstName && (
            <p className="mt-1 text-right text-xs italic text-red-400">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Last Name"
            className={`w-full rounded-md border px-4 py-3  ${
              errors.lastName
                ? "border-red-400 text-red-500"
                : "border-gray-300"
            }`}
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          {errors.lastName && (
            <img
              src={errorIcon}
              alt="Error"
              className="absolute right-4 top-1/3 h-5 w-5 -translate-y-1/2"
            />
          )}
          {errors.lastName && (
            <p className="mt-1 text-right text-xs italic text-red-400">
              {errors.lastName}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder={errors.email ? "email@example.com" : "Email Address"}
            className={`w-full rounded-md border px-4 py-3 pr-12 ${
              errors.email ? "border-red-400 text-red-500 " : "border-gray-300"
            }`}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <img
              src={errorIcon}
              alt="Error"
              className="absolute right-4 top-1/3 h-5 w-5 -translate-y-1/2"
            />
          )}
          {errors.email && (
            <p className="mt-1 text-right text-xs italic text-red-400">
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className={`w-full rounded-md border px-4 py-3  ${
              errors.password
                ? "border-red-400 text-red-500"
                : "border-gray-300"
            }`}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && (
            <img
              src={errorIcon}
              alt="Error"
              className="absolute right-4 top-1/3 h-5 w-5 -translate-y-1/2"
            />
          )}
          {errors.password && (
            <p className="mt-1 text-right text-xs italic text-red-400">
              {errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-green-500 px-4 py-3 text-white "
        >
          CLAIM YOUR FREE TRIAL
        </button>

        <p className="text-center text-xs text-gray-500 ">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-red-500">Terms and Services</span>
        </p>
      </form>
    </section>
  );
}

export default SignupForm;
