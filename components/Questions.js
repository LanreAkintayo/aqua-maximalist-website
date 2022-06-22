import Faq from "react-faq-component";

export default function Questions({data, styles, config}) {
  return (
    <section
      className=" py-12 mx-4 sm:mx-12 text-black dark:text-white font-hand"
      id="faq"
    >
      <h1 className="text-3xl pb-2 font-medium text-center font-serif py-3">
        FAQ
      </h1>

      <Faq data={data} styles={styles} config={config} />
    </section>
  );
}
