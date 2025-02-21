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
      if (!user?.email) return {};
      const res = await axiosSecure.get(`user/${user.email}`);
      return res.data;
      //   const res = await axiosSecure.get(`user/${user?.email}`);
    },
    enabled: !!user?.email,
  });
  return { userData, refetchSingleUserData };
};

export default useSingleUser;
