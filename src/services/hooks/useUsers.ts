import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const response = await api.get("/users", {
    params: {
      page: page,
    },
  });

  const totalCount = Number(response.headers["x-total-count"]);
  const users = response.data.users.map(user => {
    {
      console.log(user);
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return { users, totalCount };
}
export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5 * 100,
  });
}
