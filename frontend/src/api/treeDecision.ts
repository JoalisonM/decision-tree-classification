import {api} from "../lib/axios";

const uriTreeDecision = "tree-decision"

export interface TreeDecisionProps {
  attribute: string;
}

export interface CreateTreeDecisionInput {
  attribute: string;
}

export const TreeDecision = {
  get() {
    return api.get<TreeDecisionProps>(uriTreeDecision);
  },

  create(treeDecision: CreateTreeDecisionInput) {
    return api.post<CreateTreeDecisionInput>(`${uriTreeDecision}`, treeDecision);
  }
};
