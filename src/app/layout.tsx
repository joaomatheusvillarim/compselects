import React from "react";
import "./globals.css";
import Layout from "@/Components/Layout";
import "@/style/global.css"
import "@/style/normalize.css"

export default function layout({children}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body>

        <Layout>
          {children}

        </Layout>
      </body>
    </html>
  );
}
