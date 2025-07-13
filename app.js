function showTheRecipe(response) {
  let data = response.data;
  let respond = document.querySelector(".answer");
  respond.innerHTML = data.answer;
  console.log(data.answer);
  respond.classList.add("answer-ai");
}

function searchRecipe(recipe) {
  let key = "267ca2c9b55504a4o4ef34d3b037dtb8";
  let prompt = `I want to make a recipe for ${recipe}. Can you give me the ingredients and step-by-step instructions?`;
  let context =
    "You are a helpful AI chef assistant. When the user enters a dish, provide a short list of ingredients and step-by-step cooking instructions, in a short, concise way,make sure it's easy to read and in original HTML without mentioning html in your response.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios(apiUrl).then(showTheRecipe);
  let answer = document.querySelector(".answer");
  answer.classList.add("answer-ai");
  new Typewriter(answer, {
    strings: ["⏳Generating your recipe for you . . ."],
    autoStart: true,
    delay: 15,
  });
}

function handleSubmission(event) {
  event.preventDefault();
  let userInput = document.querySelector("#ai-form-input");
  searchRecipe(userInput.value);
}
let form = document.querySelector("#actual-form");
form.addEventListener("submit", handleSubmission);
