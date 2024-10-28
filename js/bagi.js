let num1, num2, correctAnswer, score = 0;

function generateQuestion() {
    num2 = Math.floor(Math.random() * 9) + 1; // Menghindari pembagian dengan 0
    correctAnswer = Math.floor(Math.random() * 10); // Jawaban yang benar
    num1 = correctAnswer * num2; // Menghitung num1 agar hasil pembagian adalah correctAnswer
    document.getElementById('question').innerText = `Berapa ${num1} ÷ ${num2}?`;
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
    document.getElementById('next').style.display = 'none';
}

document.getElementById('submit').addEventListener('click', function() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAudio = document.getElementById('correctAudio');
    const incorrectAudio = document.getElementById('incorrectAudio');

    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerText = 'Jawaban Anda Benar!';
        score++;
        correctAudio.play(); // Mainkan suara benar
    } else {
        document.getElementById('result').innerText = `Jawaban Anda Salah! Jawaban yang benar adalah ${correctAnswer}.`;
        incorrectAudio.play(); // Mainkan suara salah
    }
    
    document.getElementById('score').innerText = `Skor: ${score}`;
    document.getElementById('next').style.display = 'block';
});

document.getElementById('next').addEventListener('click', generateQuestion);

// Generate the first question on page load
generateQuestion();