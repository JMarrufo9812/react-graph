import gql from "graphql-tag";

export const USERS_QUERY= gql`{
    allUsers{
      id
      email
      name
      lastName
      phones
      jobTittle
      country
      
      }
  }`;
  