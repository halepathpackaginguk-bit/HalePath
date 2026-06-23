import Product_Gallery from "./product-gallery";
import FormTabs from "../formTabs";
function Banner({ data }: any) {
  //console.log("Banner", data);

  return (
    <section className="pt-14">
      <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7">
        <div className="md:w-1/2 w-full">
          <Product_Gallery data={data} />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-[40px] md:leading-none text-3xl font-bold text-title_Clr">
            {data?.name}
          </h1>
          <div
            className="mt-1.5 text-lg font-normal text-title_Clr mb-5"
            dangerouslySetInnerHTML={{ __html: data?.shortDescription }}
          />
          <FormTabs productName={data?.title} productPrice={650} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
