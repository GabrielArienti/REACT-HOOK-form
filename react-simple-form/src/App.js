import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <div className="row">
        {/* form colunm */}
        <div className="column">
          <div className="left-half">
            <h1>Contact Us</h1>
            <p>Your opinion its important!</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* NAME */}
              <p className="input-label">Name *</p>
              <input
                className="input"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                })}
                {...(errors.name && (
                  <span className="error">
                    {errors.name.type === "required" &&
                      "This field is required."}
                  </span>
                ))}
              ></input>
            </form>
          </div>
        </div>
        {/* Image columns */}
        <div className="column"></div>
      </div>
    </div>
  );
}

export default App;
