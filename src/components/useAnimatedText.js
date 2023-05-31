import { useEffect } from 'react';

const useAnimatedText = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const handleMouseOver = (event) => {
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1;
      }, 30);
    };

    document.querySelectorAll(".animatedText").forEach((element) => {
      console.log(element)
      element.addEventListener("mouseover", handleMouseOver);
    });

    return () => {
      document.querySelectorAll(".animatedText").forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
      });
    };
  }, []);
};

export default useAnimatedText;
