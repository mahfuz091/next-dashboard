"use client";
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import logo from "../../../assets/images/oyolloo-logo-color-horizontal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axiosInstance from "@/lib/axios-instance";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = { email, password };
    console.log(user);
    try {
      const response = await axiosInstance.post("/api/login", user);
      const accessToken = response.data.data.token;
      const data = response.data.data;
      console.log(data);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          padding: "50px 30px",
          marginTop: "50px",
          background: "#FFF",
          borderRadius: "16px",
        }}
      >
        <img
          style={{ maxWidth: "220px", marginBottom: "2.25rem" }}
          src={logo.src}
          alt=''
        />
        <Typography
          variant='h4'
          align='center'
          sx={{
            fontSize: "20px",
            display: "flex",
            gap: "5px",
            fontWeight: "600",
          }}
          gutterBottom
        >
          <FontAwesomeIcon
            style={{ width: "20px", color: "#2f7bff", marginBottom: "20px" }}
            icon={faShieldHalved}
          />
          Welcome to Oyolloo
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin='normal'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin='normal'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ textAlign: "right", padding: "5px 0" }}>
            <Link href='#'>Forgot Password</Link>
          </Box>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            //   onClick={handleLogin}
            sx={{ marginTop: "20px" }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignInPage;
