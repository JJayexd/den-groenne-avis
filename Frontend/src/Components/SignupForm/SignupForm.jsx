import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
  
    try {
      const url = "http://localhost:3000/api/users";
  
      const requestData = {
        email: data.email,
        password: data.password,
        firstName: data.firstname,
        lastName: data.lastname,
        address: data.address,
        zipcode: data.zipcode,
        city: data.city,
        hasNewsletter: data.newsletter || false,
        hasNotification: false,
        refreshToken: "",
        isActive: true
      };
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || "Fejl ved oprettelse af bruger");
      }
      
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
  
      navigate("/login");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 w-[400px] rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">OPRET EN KONTO</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label className="text-black-400 font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email er påkrævet" })}
              className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
              placeholder=""
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <label className="text-black-400 font-semibold">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password er påkrævet" })}
              className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
              placeholder=""
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <label className="text-black-400 font-semibold">Fornavn</label>
            <input
              type="text"
              {...register("firstname", { required: "Fornavn er påkrævet" })}
              className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
              placeholder=""
            />

            <label className="text-black-400 font-semibold">Efternavn</label>
            <input
              type="text"
              {...register("lastname", { required: "Efternavn er påkrævet" })}
              className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
              placeholder=""
            />

            <label className="text-black-400 font-semibold">Adresse</label>
            <input
              type="text"
              {...register("address")}
              className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
              placeholder=""
            />

            <label className="text-black-400 font-semibold">By</label>
            <input
              type="text"
              {...register("city")}
              className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
              placeholder=""
            />

            <label className="text-black-400 font-semibold">Postnummer</label>
            <input
              type="text"
              {...register("zipcode")}
              className="shadow-[0px_4px_4px_-2px_rgba(0,0,0,0.1)] w-full p-2 rounded"
              placeholder=""
            />

          {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}

          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {loading ? "Opretter..." : "Opret"}
          </button>
        </form>
      </div>
    </div>
  );
};
