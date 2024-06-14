'use client';
import { gql, useQuery } from '@apollo/client';

const HELLO = gql`
  query Query {
    hello
  }
`;

export default function Home() {
  const { data } = useQuery(HELLO, {
    fetchPolicy: 'network-only',
  });
  console.log('data ', data);

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center p-20'>
      {' '}
      landing page{' '}
    </div>
  );
}
