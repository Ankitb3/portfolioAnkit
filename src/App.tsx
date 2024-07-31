import { lazy, Suspense } from "react"
import Loading from "./components/Loading";

const Home = lazy(() => import('./Pages/Home'));
const LoadingFallback = () => (
  <div className="min-h-screen">
    <Loading/>
  </div>
);
const App = () => {
  return (
   <div className="text-white">
    <Suspense fallback={<LoadingFallback/>}>
   <Home/>
   </Suspense>
   </div>  )
}

export default App