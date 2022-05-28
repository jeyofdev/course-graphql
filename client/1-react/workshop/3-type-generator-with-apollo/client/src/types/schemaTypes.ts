/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateWilder
// ====================================================

export interface CreateWilder_createWilder {
  __typename: "Wilder";
  id: string;
}

export interface CreateWilder {
  createWilder: CreateWilder_createWilder;
}

export interface CreateWilderVariables {
  name: string;
  city: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Mutation
// ====================================================

export interface Mutation_deleteWilder_skills {
  __typename: "Skill";
  id: string;
  title: string;
  votes: number;
}

export interface Mutation_deleteWilder {
  __typename: "Wilder";
  id: string;
  name: string;
  city: string;
  skills: Mutation_deleteWilder_skills[] | null;
}

export interface Mutation {
  deleteWilder: Mutation_deleteWilder;
}

export interface MutationVariables {
  deleteWilderId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWilders
// ====================================================

export interface GetWilders_wilders_skills {
  __typename: "Skill";
  title: string;
  votes: number;
}

export interface GetWilders_wilders {
  __typename: "Wilder";
  id: string;
  name: string;
  city: string;
  skills: GetWilders_wilders_skills[] | null;
}

export interface GetWilders {
  wilders: GetWilders_wilders[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
