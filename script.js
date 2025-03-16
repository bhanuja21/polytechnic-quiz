function submitQuiz() {
    const totalQuestions = 10;
    let categoryScores = {
        tech: 0,
        engineering: 0,
        research: 0,
        environment: 0
    };

    // Loop through each question and update category scores based on answers
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        
        if (userAnswer) {
            const answerValue = userAnswer.value;
            if (answerValue === "a" || answerValue === "b") {
                categoryScores.tech++;  // Tech-related answers
            } else if (answerValue === "c") {
                categoryScores.engineering++;  // Engineering-related answers
            } else if (answerValue === "d") {
                categoryScores.environment++;  // Environment-related answers
            }
        }
    }

    // Sort categories based on scores in descending order
    const sortedCategories = Object.entries(categoryScores)
                                    .sort((a, b) => b[1] - a[1])
                                    .map(entry => entry[0]);

    // Career suggestions mapping
    const suggestions = {
        tech: "You should explore careers in Technology (Software Development, IT, etc.)",
        engineering: "You should explore careers in Engineering (Mechanical, Civil, Electrical, etc.)",
        research: "You should explore careers in Research (Scientific Research, Data Science, etc.)",
        environment: "You should explore careers in the Environment or Biology field (Ecology, Environmental Science, etc.)"
    };

    // Get top 3 suggestions
    let topSuggestions = sortedCategories.slice(0, 3).map(category => suggestions[category]);

    // Store results in localStorage
    localStorage.setItem("careerSuggestions", JSON.stringify(topSuggestions));

    // Redirect to results page
    window.location.href = "results.html";
}
