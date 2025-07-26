const About = () => {
  return (
    <div className="p-4 bg-zinc-100">
      <section className="text-4xl font-bold text-center mb-4">
        About Us
      </section>
      <main className="flex flex-col md:grid md:grid-cols-2 gap-x-2">
        <section className="text-[20px] mb-[20px] md:mb-0">
          <div>
            At MaxFit, we believe that fitness is not just about lifting weights
            or running on a treadmill—it’s about transforming lives. Whether
            you're looking to build strength, lose weight, improve endurance, or
            simply adopt a healthier lifestyle, we provide the tools, guidance,
            and community to help you succeed.
          </div>
          <div>
            MaxFit was born from a passion for authentic transformation, our gym
            was created by fitness professionals who grew tired of impersonal
            big-box gyms. We envisioned a space where every member is known by
            name, workouts are tailored to individual needs, progress is
            celebrated at every level and the community becomes your greatest
            motivator. We are a thoughtfully crafted facility where every detail
            serves a purpose.
          </div>
          <div>
            Our mission is simple: to inspire and empower people to achieve
            their fitness goals in a supportive, motivating, and inclusive
            environment. We envision a world where everyone has access to
            top-tier fitness resources and the confidence to pursue their best
            selves. Since our founding in [Year], we’ve been committed to
            delivering exceptional training experiences, cutting-edge
            facilities, and a welcoming atmosphere that keeps members coming
            back.
          </div>
        </section>
        <section className="bg-slate-700 p-4 text-[18px] rounded-2xl">
          <div className="text-center font-bold text-2xl">
            What Makes Us Different?
          </div>
          <div className="text-white mb-2 p-2">
            <ul className="list-disc">
              <li className="mb-2">
                World-Class Facilities & Equipment We invest in the latest
                fitness technology to ensure you have everything you need for an
                effective workout. Our gym features: Premium strength and cardio
                machines from leading brands Dedicated functional training zones
                (free weights, kettlebells, battle ropes, sleds, etc.) Group
                fitness studios for classes like HIIT, cycling, yoga, and
                Pilates Recovery area with foam rollers, massage guns, and
                stretching spaces
              </li>
              <li className="mb-2">
                Expert Coaching & Personalized Training Our certified trainers
                are more than just instructors—they’re your partners in
                progress. Whether you're training for a competition, recovering
                from an injury, or just starting out, we offer: One-on-one
                personal training tailored to your goals Small group training
                for accountability and camaraderie Nutritional guidance to
                complement your workouts
              </li>
              <li className="mb-2">
                Flexible & Affordable Memberships We know that fitness should
                fit your life—not the other way around. That’s why we offer: No
                long-term contracts (month-to-month options available) 24/7
                access for early birds and night owls Student, military, and
                family discounts Free trial sessions so you can experience the
                gym before committing
              </li>
            </ul>
            <hr />
          </div>
          <div className="text-center text-2xl font-bold">
            Our Story - Built On Passion
          </div>
          <div className="text-white">
            MaxFit was founded by Alan Kay, a [fitness
            professional/athlete/enthusiast] who saw a need for a gym that
            prioritized results, community, and enjoyment over gimmicks. What
            started as a small local gym has grown into Lagos premier fitness
            destination, thanks to the dedication of our members and team. Join
            Us Today! No matter where you are in your fitness journey, MaxFit is
            here to help you level up. Stop by for a tour, try a free class, or
            speak with one of our coaches to get started. Your strongest,
            healthiest self is waiting—let’s make it happen together!
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
