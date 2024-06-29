async function queryModel(data) {
  let retries = 2;
  while (retries > 0) {
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
      return result;
    } catch (error) {
      if (error.message.includes("503")) {
        await new Promise((r) => setTimeout(r, 8000));
        retries--;
      } else {
        throw error;
      }
    }
  }
  return [0.53];
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
