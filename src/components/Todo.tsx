import WordRotate from "../magicui/WordRotate"

const Todo = () => {
  return (
    <div className="min-h-screen mt-10 flex flex-col justify-center">
        <h2 className="lg:text-6xl text-4xl text-center relative bottom-6">Maker at heart.</h2>
        <h2 className="text-center lg:text-4xl text-xl relative bottom-5">What I love doing</h2>
        <WordRotate
      className="lg:text-[2.5rem] text-4xl text-center font-bold text-white dark:text-white"
      words={["✔Clean code that's enjoyable to work with","✔Designing and implementing beautiful UI","✔Working outside the comfort zone","✔Having a strong grasp of core CS concepts"]}
    //   words={["✔Building responsive, visually stunning websites is where my creativity meets technical expertise.","✔Turning complex ideas into sleek, user-friendly interfaces is my superpower", "✔Bringing designs to life with clean, efficient code is my passion.","✔My focus is on crafting pixel-perfect, high-performance interfaces that enhance user satisfaction."]}
    />
    </div>
  )
}

export default Todo;