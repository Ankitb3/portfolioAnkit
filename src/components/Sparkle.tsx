import { useTheme } from "../context/ThemeContext";
import { SparklesCore } from "../magicui/Sparkles";
export interface SparkleProps {
    children: React.ReactNode;
  }
  
export function Sparkle({children}:SparkleProps) {
  const { theme } = useTheme();

  return (
    <div className={`relative w-full  ${theme == "dark"?"bg-black":"bg-white "} flex flex-col items-center justify-center overflow-hidden rounded-md`}>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {children}
    </div>
  );
}
