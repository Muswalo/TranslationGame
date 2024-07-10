async function queryModel(data) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/sentence-transformers/all-mpnet-base-v2",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HUGGINGFACE_AUTH_ID}`,
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log (200, '||', 'grading done with MPNET')
      return result;
    } catch (error) {
      console.error (error)
    }
  return gradeResponseFallback (data.inputs.source_sentence, data.correctAnswerinputs.sentences[0]);
}

function gradeResponseFallback(correctAnswer, userResponse) {
  console.log (503, '||', 'falling back to rule based grading.')
  const normalizedCorrect = correctAnswer.toLowerCase().trim();
  const normalizedUser = userResponse.toLowerCase().trim();

  if (normalizedCorrect === normalizedUser) {
    return [1];
  }

  const correctTokens = normalizedCorrect.split(/\s+/);
  const userTokens = normalizedUser.split(/\s+/);
  let matchCount = 0;

  userTokens.forEach((token) => {
    if (correctTokens.includes(token)) {
      matchCount++;
    }
  });

  const score = matchCount / correctTokens.length;
  return [Math.round(score * 100) / 100];
}

const gradeResponse = async (correctAnswer, userResponse) => {
  const ModelResponse = await queryModel({
    inputs: {
      source_sentence: correctAnswer,
      sentences: [userResponse],
    },
  });
  return ModelResponse[0] * 100;
};

export default gradeResponse;
