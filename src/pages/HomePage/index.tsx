import { useState, useEffect, useRef, Suspense } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import LazyDrinks from "../../lazyComponents/LazyDrinks";
import { StyledLoading } from "@/components/ui/Loading";
const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  padding-top: 5.6rem;
`;

const StyleFlexColumn = styled.div`
  gap: 2rem;
  width: 100%;
`;

function HomePage() {
  const [showDrinks, setShowDrinks] = useState(false);
  const drinksRef = useRef(null);

  //为了优化首屏加载
  useEffect(() => {
    const currentRef = drinksRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDrinks(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <StyledHome>
      <StyleFlexColumn>
        <Hero />
      </StyleFlexColumn>

      <div ref={drinksRef}>
        {showDrinks && (
          <Suspense fallback={<StyledLoading>Loading...</StyledLoading>}>
            <LazyDrinks />
          </Suspense>
        )}
      </div>
    </StyledHome>
  );
}

export default HomePage;
