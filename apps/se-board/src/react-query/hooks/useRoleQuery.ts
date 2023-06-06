import { useMutation, useQuery } from "@tanstack/react-query";

import { deleteRole, getRoleInfos, postRole, putRole } from "@/api/Role";
import { errorHandle } from "@/utils/errorHandling";

export const useGetRoleInfos = (page = 0, perPage = 0) => {
  return useQuery(
    ["roleInfos", page, perPage],
    () => getRoleInfos(page, perPage),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      onError: (err) => {
        errorHandle(err);
      },
    }
  );
};

export const useDeleteRole = () => {
  return useMutation((roleId: number) => deleteRole(roleId), {
    onError: (err) => {
      errorHandle(err);
    },
  });
};

export const useUpdateRole = () => {
  return useMutation(
    (param: {
      roleId: number;
      name: string;
      alias: string;
      description: string;
    }) =>
      putRole(param.roleId, {
        name: param.name,
        alias: param.alias,
        description: param.description,
      }),
    {
      onError: (err) => {
        errorHandle(err);
      },
    }
  );
};

export const useAddRole = () => {
  return useMutation(
    (param: { name: string; alias: string; description: string }) =>
      postRole(param),
    {
      onError: (err) => {
        errorHandle(err);
      },
    }
  );
};
