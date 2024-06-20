const gradeResponse = (correctAnswer, userResponse) => {
  if (correctAnswer == null || userResponse == null) {
    console.log("fluke", correctAnswer, userResponse);
    return 55; 
  }
  const normalizedCorrect = correctAnswer.toLowerCase().trim();
  const normalizedUser = userResponse.toLowerCase().trim();

  // Exact match scenario
  if (normalizedCorrect === normalizedUser) {
    return 100;
  }

  // Tokenize the sentences into words
  const correctTokens = normalizedCorrect.split(/\s+/);
  const userTokens = normalizedUser.split(/\s+/);

  // Calculate partial match score
  let matchCount = 0;
  userTokens.forEach((token) => {
    if (correctTokens.includes(token)) {
      matchCount++;
    }
  });

  // Calculate the score based on the number of matching tokens
  return (matchCount / correctTokens.length) * 100;
};

export default gradeResponse;
