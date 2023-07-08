import { ReactNode, useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

import { CreateTreeDecisionInput, TreeDecision, TreeDecisionProps } from "../api/treeDecision";

interface TreeDecisionContextType {
  target: TargetProps;
  tree: TreeDecisionProps;
  setTarget: (value: TargetProps) => void;
  setTree: (value: TreeDecisionProps) => void;
  getFirstQuestion: () => Promise<TreeDecisionProps>;
  createTreeDecision: (data: CreateTreeDecisionInput) => Promise<CreateTreeDecisionInput>;
}

interface TreeDecisionsContextProviderProps {
  children: ReactNode;
}

interface TargetProps {
  attribute: string;
}

export const TreeDecisionsContext = createContext({} as TreeDecisionContextType);

export const TreeDecisionsContextProvider = ({ children }: TreeDecisionsContextProviderProps) => {
  const [target, setTarget] = useState<TargetProps>({} as TargetProps);
  const [tree, setTree] = useState<TargetProps>({} as TargetProps);

  const getFirstQuestion = useCallback(
    async () => {
      const response = await TreeDecision.get();

      setTree(response.data);

      return response.data;
    }, []
  );

  const createTreeDecision = useCallback(
    async (data: CreateTreeDecisionInput) => {
      const response = await TreeDecision.create(data);

      return response.data;
    }, []
  );

  return (
    <TreeDecisionsContext.Provider
      value={{
        tree,
        target,
        setTree,
        setTarget,
        getFirstQuestion,
        createTreeDecision,
      }}
    >
      {children}
    </TreeDecisionsContext.Provider>
  );
}

export const useTreeDecisions = () => {
  const tree = useContextSelector(TreeDecisionsContext, (context) => context.tree);
  const target = useContextSelector(TreeDecisionsContext, (context) => context.target);
  const setTree = useContextSelector(TreeDecisionsContext, (context) => context.setTree);
  const setTarget = useContextSelector(TreeDecisionsContext, (context) => context.setTarget);
  const getFirstQuestion = useContextSelector(TreeDecisionsContext, (context) => context.getFirstQuestion);
  const createTreeDecision = useContextSelector(TreeDecisionsContext, (context) => context.createTreeDecision);

  return {
    tree,
    target,
    setTree,
    setTarget,
    getFirstQuestion,
    createTreeDecision,
  };
}