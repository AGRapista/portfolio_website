import { useEffect } from 'react';

const useAnimatedText = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/&$_=";

    const handleMouseOver = (event) => {
      console.log("firing")
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 33)];
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
