import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ForWhom = () => {
  return (
    <div id="ourUsers" className="px-5 md:px-24 py-16">
      <h2 className="text-xl md:text-3xl font-bold mb-20 uppercase">Our Product Users</h2>

      {/* Students Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-24">
        {/* Images */}
        <div data-aos="fade-right">
          <img
            src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>

        {/* Description */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-left flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-3 uppercase">Students</h3>
          <p className="text-lg leading-loose">
            Elevate your corporate efficiency and project management to
            unprecedented heights with TaskNest, the definitive task management
            solution designed to meet the unique needs of businesses. TaskNest
            redefines how corporations organize, collaborate, and achieve
            unparalleled success in their endeavors.
            <p className="text-lg leading-loose mb-2 mt-2">
              TaskNest provides a centralized hub for managing projects
              seamlessly. From task creation to completion, oversee every detail
              of your projects, ensuring they are executed with precision and
              efficiency.
            </p>
          </p>
        </div>
      </div>

      {/* Corporates Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 overflow-hidden">
        {/* Description */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-left flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-3 uppercase">Corporates</h3>
          <p className="text-lg leading-loose">
            Embark on a journey of academic excellence with TaskNest, your
            indispensable ally in student life. As a student, you face a myriad
            of tasks, assignments, and deadlines, and TaskNest is designed to
            transform your organizational experience.
            <p className="text-lg leading-loose mb-2 mt-2">
              TaskNest simplifies the complex world of student responsibilities.
              Easily create, organize, and track your tasks, ensuring you never
              miss a deadline or overlook an important assignment. Collaborate
              effortlessly with classmates on group projects or study sessions.
            </p>
          </p>
        </div>

        {/* Images */}
        <div data-aos="fade-left" className="order-first md:order-last">
          <img
            src="https://images.pexels.com/photos/8353802/pexels-photo-8353802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ForWhom;
