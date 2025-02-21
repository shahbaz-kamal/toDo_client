import React from "react";
import useAuth from "./useAuth";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSingleUser = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: userData = {}, refetch: refetchSingleUserData } = useQuery({
    queryKey: ["single-user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`user/${user?.email}`);
      return res.data;
    },
  });
  return { userData, refetchSingleUserData };
};

export default useSingleUser;
