import React from "react";
import PageBanner from "../page-banner";

const PageTemplate = ({ data }: any) => {
  const page = data.data;

  console.log("page", page);
  
  return (
    <>
      <PageBanner page_info={page} />
      <section className="py-[60px]">
        <div className="hale_container page_content">
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </section>
    </>
  );
};

export default PageTemplate;
