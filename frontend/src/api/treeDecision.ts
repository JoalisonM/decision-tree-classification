import {api} from "../lib/axios";

const uriTreeDecision = "tree-decision"

export interface TreeDecisionProps {
  attribute: string;
  certainty: number;
}

export interface CreateTreeDecisionInput {
  attribute: string;
}

export const TreeDecision = {
  get() {
    return api.get<TreeDecisionProps>(uriTreeDecision);
  },

  create(treeDecision: CreateTreeDecisionInput) {
    return api.post<TreeDecisionProps>(`${uriTreeDecision}`, treeDecision);
  }
};
