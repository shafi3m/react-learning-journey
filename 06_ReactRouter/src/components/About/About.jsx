import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-6/12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              React development is carried out by
              <span className="text-orange-700"> passionate developers</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-6/12 animate-fade-in">
            <img
              className="rounded-xl shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1681488144886-9c633f9799c0?w=800&auto=format&fit=crop&q=80"
              alt="About Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
