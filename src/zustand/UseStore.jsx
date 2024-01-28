import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../Utils/CallAPi";
export const useStore = create((set) => ({
  bears: 0,
}));
