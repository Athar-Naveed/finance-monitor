import toast from "react-hot-toast";

import {RegisterType} from "@/types";

export const HandleRegister = async (value: RegisterType, route: any) => {
  try {
    const resp = await fetch(`/api/users/register`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const dat = await resp.json();

    if (dat.status == 200) {
      toast.success(dat.message, {
        duration: 3000,
        position: "top-center",
      });

      route.push(`/user/${dat.username}`);
    }
  } catch (error: any) {
    toast.error(error.message, {
      duration: 1500,
      position: "top-center",
    });
  }
};

export const HandleLogin = async (values: RegisterType, route: any) => {
  try {
    const resp = await fetch(`/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const dat = await resp.json();
    console.log(`data: ${JSON.stringify(dat)}`);

    if (dat.status == 200) {
      toast.success(dat.message, {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#4A4EAE", // Violet color
          color: "#ffffff",
          borderRadius: "8px",
          border: "1px solid #3B3F90", // Darker violet border
        },
        iconTheme: {
          primary: "#FFFFFF",
          secondary: "#4A4EAE",
        },
      });

      route.push(`/user/${dat.username}`);
    }
  } catch (error: any) {
    toast.error(error.message, {
      duration: 1500,
      position: "top-center",
      style: {
        background: "#3498db", // Blue color
        color: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #2980b9", // Darker blue border
      },
      iconTheme: {
        primary: "#FFFFFF",
        secondary: "#3498db",
      },
    });
    return error;
  }
};
