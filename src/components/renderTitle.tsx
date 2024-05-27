export const renderTitle = (title: string) => {
    const words = title.split(" ");
    // Map over words to apply conditional styling
    const formattedWords = words.map((word, index) => {
      // Check if the word is 'dentistry' or it is the second word (index 1)
      if (word.toLowerCase() === "dentistry" || index === 1) {
        return <span className="text-[#1493A4]">{word}</span>;
      }
      return word;
    });

    // Join the words with spaces to form the complete title
    return (
      <>
        {formattedWords.reduce(
          (prev, curr, index) => (
            <>
              {prev}
              {index > 0 ? " " : ""}
              {curr}
            </>
          ),
          ""
        )}
      </>
    );
  };