import { gql } from '@apollo/client';

export const CREATE_WELCOME_EMAIL = gql`
mutation CreateWelcomeEmail($data: WelcomeEmailCreateInput) {
  createWelcomeEmail(data: $data) {
    id
  }
}
`;



