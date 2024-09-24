import aboutImage from "../assets/about-image.jpg";

function About() {
  return (
    <main className="p-8 mx-auto h-full lg:container">
      <section className="flex gap-8 justify-center items-center">
        <div className="flex flex-col gap-6 justify-center w-1/2">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg font-gray-500">
            At EasyCart, we believe shopping should be an enjoyable and
            inspiring experience. Founded in 2024, our mission is to connect you
            with high-quality products while providing exceptional customer
            service.
          </p>
          <p className="text-lg font-gray-500">
            What started as a passion project has grown into a thriving
            eCommerce platform. Our founder, Bilel Hamitouche, recognized the
            need for a marketplace that not only offered diverse products but
            also prioritized sustainability and ethical sourcing. Today, we
            partner with the best brands and artisans to bring you a curated
            selection of items that align with our values.
          </p>
        </div>
        <img
          src={aboutImage}
          alt="about image"
          className="object-center w-1/2 rounded-lg shadow-sm shadow-gray-600"
        />
      </section>
    </main>
  );
}

export default About;
