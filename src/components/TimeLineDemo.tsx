import { Timeline } from "../magicui/TimeLine";

export function TimelineSection() {
  const data = [
    {
      title: "Frontend Developer",
      company: "Mamo Technolabs Llp (Oct 2023 - Present)",
      content: (
        <div>
          <h2 className="font-semibold text-lg">Responsibility</h2>

          <ul className="list-disc ml-6">
            <li>
              Collaborated with design teams to create user-friendly web
              interfaces.
            </li>
            <li>
              Developed responsive web applications compatible across devices.
            </li>
            <li>
              Assisted in implementing and maintaining front-end frameworks.
            </li>
            <li>Participated in code reviews to uphold coding standards.</li>
            <li>
              Debugged and resolved front-end issues to enhance performance.
            </li>
          </ul>
          <h2 className="font-semibold text-lg mt-10">Achievements</h2>
          <ul className="list-disc ml-6">
            <li>
              Improved application load time by 20% through efficient coding
              practices.
            </li>
            <li>
              Acknowledged by team leads for effective collaboration and
              innovative solutions.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Frontend Developer Intern",
      company: "SlayLink (March 2023 - Sept 2023)",
      content: (
        <div>
          <h2 className="font-semibold text-lg">Responsibility</h2>

          <ul className="list-disc ml-6">
            <li>
              Assisted in developing user-friendly web interfaces using HTML,
              CSS, and JavaScript.
            </li>
            <li>
              Participated in team meetings to discuss design and development
              strategies.
            </li>
            <li>
              Collaborated with designers to ensure responsive and visually
              appealing layouts.
            </li>
            <li>
              Conducted testing and debugging to improve application
              performance.
            </li>
            <li>
              Documented processes and contributed to code reviews for quality
              assurance.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Mern Stack Course",
      company: "Road To Code (March 2022 - Sept 2022)",

      content: (
        <div>
          <h2 className="font-semibold text-lg">Key Skills Acquired</h2>
          <ul className="list-disc ml-6">
            <li>Developing RESTful APIs with Express.js and Node.js.</li>
            <li>Creating dynamic user interfaces with React.</li>
            <li>Managing data with MongoDB and Mongoose.</li>
            <li>
              Implementing authentication and authorization in applications.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-ful">
      <Timeline data={data} />
    </div>
  );
}
