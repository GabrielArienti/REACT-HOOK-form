import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log("errors", errors);

  return (
    <div className="container">
      <div className="row">
        {/* form colunm */}
        <div className="column">
          <div className="left-half">
            <h1>Contact Us</h1>
            <p>Your opinion its important!</p>

            {/* coneccting both */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* NAME */}
              <p className="input-label">Name *</p>
              <input
                className="input"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.name && (
                <span className="error">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLenght" && "Name to long."}
                </span>
              )}
              {/* end */}

              {/* EMAIL */}
              <p className="input-label">Email *</p>
              <input
                className="input"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <span className="error">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email"}
                </span>
              )}
              {/* end */}

              {/* PHONE */}
              <p className="input-label">Phone *</p>
              <input
                className="input"
                type="text"
                placeholder="Phone Number"
                {...register("phone", {
                  required: true,
                  pattern:
                    /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
                })}
              />
              {errors.phone && (
                <span className="error">
                  {errors.phone.type === "required" &&
                    "This field is required."}
                  {errors.phone.type === "pattern" && "Invalid number"}
                </span>
              )}
              {/* end */}

              {/* MESSAGE */}
              <p className="input-label">Message *</p>
              <input
                className="input"
                type="text"
                placeholder="Please, tell us what you think about us..."
                {...register("message", {
                  required: true,
                  maxLength: 300,
                  minLength: 50,
                })}
              />
              {errors.message && (
                <span className="error">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLenght" &&
                    "Max of 300 characters"}
                  {errors.message.type === "minLenght" &&
                    "Min of 50 characters"}
                </span>
              )}
              {/* end */}

              {/* Submit button */}
              <div>
                <input
                  className="submit"
                  type="submit"
                  value="Send Message"
                ></input>
              </div>
              {/* end */}
            </form>
          </div>
        </div>
        {/* Image columns */}
        <div className="column">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"
            alt="Living room"
            style={{ height: "650px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
