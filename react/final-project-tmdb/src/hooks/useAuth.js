import { supabase } from "@/lib/supabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }) =>
      supabase.auth.signInWithPassword({ email, password }),
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });
}

export function useSignup() {
  return useMutation({
    mutationFn: ({ email, password }) =>
      supabase.auth.signUp({ email, password }),
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => supabase.auth.signOut(),
    onSuccess: () => queryClient.clear(),
  });
}
