import axios from "axios";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    axios.post(
      "https://jwq34ern4h.execute-api.us-east-2.amazonaws.com/dev/api/users",
      data
    );
    e.target.reset();
    alert(`User ${data.firstName} ${data.lastName} registered.`);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" name="firstName" ref={register({ required: true })} />
      {errors.firstName && <p>This is required</p>}

      <label>Last name</label>
      <input type="text" name="lastName" ref={register({ required: true })} />
      {errors.lastName && <p>This is required</p>}

      <label>Phone Number</label>
      <input type="tel" name="phoneNumber" ref={register({ required: true })} />
      {errors.phoneNumber && <p>This is required</p>}

      <input type="submit" />
    </form>
  );
}
