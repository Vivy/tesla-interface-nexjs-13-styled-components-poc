'use client';

import { useEffect } from 'react';

interface IErrorPage {
  error: Error;
}
const ErrorPage = ({ error }: IErrorPage) => {
  useEffect(() => {});

  return (
    <div>
      <h1>Error i have no ideea what is happaning</h1>
      <p>this is getting on my nerves but I will find the solution</p>
      <p> And let`s talk in romanina beause everyone knows english</p>
    </div>
  );
};

export default ErrorPage;
