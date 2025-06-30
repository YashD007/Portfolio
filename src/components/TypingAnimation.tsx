import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ words, className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    let typeSpeed = isDeleting ? 50 : 100;
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && currentText === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && currentText === '') {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 500); // Pause before typing next word
    } else {
      timeoutId = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
        );
      }, typeSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-cyber-blue">|</span>
    </span>
  );
};

export default TypingAnimation;
