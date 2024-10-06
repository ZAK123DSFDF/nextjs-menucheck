"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllMenus } from "../actions/getAllMenus";
import { useEffect } from "react";
import { Box } from "@mui/material";

export default function GetAllMenus() {
  const { data } = useQuery({
    queryKey: ["allMenus"],
    queryFn: () => getAllMenus(),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {data?.map((menu: any, index: any) => {
        return (
          <Box
            key={index}
            sx={{
              width: "max-content",
              height: "max-content",
              minWidth: "300px",
              maxWidth: "300px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              padding: 3,
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={menu?.Picture[0]}
              width={200}
              height={200}
              alt="card"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                alignSelf: "center",
              }}
            />
          </Box>
        );
      })}
    </>
  );
}
