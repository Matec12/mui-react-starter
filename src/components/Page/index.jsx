import { Helmet } from 'react-helmet-async';

const Page = ({ children, title }) => (
  <>
    <Helmet>
      <title>{`App Name | ${title}`}</title>
    </Helmet>
    {children}
  </>
);

export default Page;
