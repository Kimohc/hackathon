<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizitto</title>
    <link rel="stylesheet" href="../CSS/Home.css">
    <link rel="icon" type="image/x-icon" href="../IMG/quizpic.ico">
    <script src="../JS/Home.js"></script>
</head>

<body>
    <div class="container">
        <h1>Quiz</h1>
        <select name="Category1" id="Category" onchange="update()">
            <option value="Politiek">Politiek</option>
            <option value="Sport">Sport</option>
            <option value="Custom">Custom</option>
            <option value="Custom-veranderen">Custom Veranderen</option>
        </select>
        <button class="btn" id="startButton" onclick="Start()">Start Quiz!</button>

    </div>

    <script src="../JS/confetti.js"></script>
    <!-- Confetti  JS-->
    <script>
        confetti.start()
    </script>

</body>
</html>