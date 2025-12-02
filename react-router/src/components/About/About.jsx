export const About = () => {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container m-auto px-6 text-gray-300 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
              alt="Startup team working"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-100 font-bold md:text-4xl">
              React development by passionate developers
            </h2>
            <p className="mt-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
              voluptatem accusantium nemo perspiciatis delectus atque autem!
              Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur.
            </p>
            <p className="mt-4 text-gray-400">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
