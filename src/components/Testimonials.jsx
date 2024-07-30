import React from "react";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    role: "Chairman @ FionaApps",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sanya",
    role: "CEO @ ABC Web Agency",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Vir Min",
    role: "Chief Designer @ EM Apps",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin",
    role: "Chairman @ Sigma WebApps",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Dorian",
    role: "Executive @ Pears & Co",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/105/105",
  },
];

const Testimonial = ({ name, role, text, img }) => (
  <div className="testimonial-card p-5">
    <div className="flex gap-6"><img src={img} alt={name} className="w-16 h-16 rounded-full mb-2" />
    <div className=""><h4 className="font-bold text-lg">{name}</h4><h4>{role}</h4></div>
    </div>
    <p className="text-lg">{text}</p>
    
    <div className="rating mt-10">{"⭐".repeat(5)}</div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="flex bg-gray-100">
      <div className="w-full">
        <div className="bg-white mt-20 h-screen fixed w-[30%] z-50">
          <div className="w-20% ml-24 mt-24">
            <h2 className="text-5xl font-bold mb-2 text-gray-900">What My Learners</h2>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-start to-custom-end">Say</h2>
            <p className="text-lg w-30 text-slate-700 mt-6">
              Learning communicate to<br /> global world and build a<br /> bright future with our histudy.
            </p>
            <button className="text-base font-semibold rounded-lg px-6 py-4 bg-gradient-to-r from-custom-start to-custom-end text-white mt-6">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <div className="scroll-container mt-20">
            <div className="scroll-content-left flex">
              {TestimonialData.map((testimonial, index) => (
                <div className="scroll-item" key={testimonial.id}>
                  <Testimonial name={testimonial.name} role={testimonial.role} text={testimonial.text} img={testimonial.img} />
                </div>
              ))}
            </div>

            <div className="scroll-container mt-8">
              <div className="scroll-content-right flex">
                {TestimonialData.map((testimonial, index) => (
                  <div className="scroll-item" key={testimonial.id}>
                    <Testimonial name={testimonial.name} role={testimonial.role} text={testimonial.text} img={testimonial.img} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
