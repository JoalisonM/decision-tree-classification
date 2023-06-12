import {api} from "../lib/axios";

const uriTreeDecision = "tree-decision"

export const TreeDecision = {
  create(treeDecision: any) {
    return api.post(`${uriTreeDecision}`, treeDecision);
  }
};