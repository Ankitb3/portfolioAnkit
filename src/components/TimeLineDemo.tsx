import { Timeline } from "../magicui/TimeLine";

export function TimelineSection() {
  const data = [
    {
      title: "Frontend Developer",
      company: "Mamo Technolabs Llp (Oct 2023 - Present)",
      img:"data:image/jpeg;base64,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",
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
      img:"data:image/jpeg;base64,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",
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
     img:"data:image/jpeg;base64,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",
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
