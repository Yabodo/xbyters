export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await query({ question: body.question }).then((response) => {
    return response;
  });
});

async function query(data) {
  const response = await fetch(
    "https://llm-bot.onrender.com/api/v1/prediction/13a09b2b-8379-430c-b76d-a426da5f7fe4",
    {
      headers: {
        Authorization: "Bearer 7bdLxR9QPAilrI2u6G9LA9y7nn9xrfVAoCMQv+xvvYk=",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}
