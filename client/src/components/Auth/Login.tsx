import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export const Login: React.FC = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        padding: "12px 24px",
      }}
    >
      <div style={{ margin: "0 auto", width: "100%", maxWidth: "400px" }}>
        <h2
          style={{
            marginTop: "40px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1f2937",
          }}
        >
          Login
        </h2>
      </div>
      <div
        style={{
          marginTop: "40px",
          margin: "0 auto",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            axios
              .post("http://localhost:3000/api/user/login", {
                email: email.current?.value,
                password: password.current?.value,
              })
              .then((data) => {
                console.log("data", data, email.current);
                const message = `You are logged IN, ${email?.current?.value}! token : ${data.data}`;
                toast(message);
              })
              .catch((err) => {
                toast.error(err.message);
              });
          }}
          className="space-y-6"
          action="http://localhost:3000/api/user/login"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              Email address
            </label>
            <div style={{ marginTop: "8px" }}>
              <input
                id="email"
                name="email"
                ref={email}
                type="email"
                autoComplete="email"
                required
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  padding: "8px",
                  fontSize: "14px",
                  color: "#1f2937",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#1f2937",
              }}
            >
              Password
            </label>
            <div style={{ marginTop: "8px" }}>
              <input
                id="password"
                ref={password}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                style={{
                  display: "block",
                  width: "100%",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  padding: "8px",
                  fontSize: "14px",
                  color: "#1f2937",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                borderRadius: "6px",
                backgroundColor: "#4f46e5",
                padding: "12px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
                outline: "none",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#4338ca")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#4f46e5")
              }
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
