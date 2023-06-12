import { useCallback } from "react";

import { TreeDecision } from "../api/treeDecision";

export const useTreeDecision = () => {
  const createTreeDecision = useCallback(
    async (data: any) => {
      const response = await TreeDecision.create(data);

      return response.data;
    }, []
  );

  return {
    createTreeDecision,
  };
}