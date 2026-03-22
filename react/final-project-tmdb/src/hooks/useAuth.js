import { supabase } from "@/lib/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });
}

export function useSignup() {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      return data;
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onSuccess: () => queryClient.clear(),
  });
}
