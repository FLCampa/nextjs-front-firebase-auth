// External Libraries
import React from "react";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";

// Assets
import loading from "../../../public/images/loading.gif";

// Hooks
import useAuth from "../../data/hook/useAuth";

// Stylization
import { LoadingContainer } from "./styles";

// Interface
interface ForceAuthProps {
  children?: any;
}

const ForceAuth: React.FC<ForceAuthProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (!document.cookie?.includes('admin-front-auth')) {
                  window.location.href = '/authentication'
                }
              `,
            }}
          />
        </Head>
        {children}
      </>
    );
  }

  function renderLoading() {
    return (
      <LoadingContainer>
        <Image src={loading} alt="loading gif" />
      </LoadingContainer>
    );
  }

  if (isLoading) {
    return renderLoading();
  }

  if (!isLoading && user?.email) {
    return renderContent();
  }

  router.push("/authentication");
  return null;
};

export default ForceAuth;
