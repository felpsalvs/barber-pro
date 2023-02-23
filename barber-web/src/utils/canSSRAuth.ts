import { GetServerSidePropsContext, GetServerSideProps, GetServerSidePropsResult } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import { AuthTokenError } from '../services/errors/AuthTokenError';

export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (cxt: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(cxt);

    const token = cookies['@barber.token'];
    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    try {
      return await fn(cxt);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(cxt, '@barber.token', { path: '/' });

        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
  };
}